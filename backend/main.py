from fastapi import FastAPI, Depends, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import User
from schemas import UserCreate, UserLogin
from auth import hash_password, verify_password, create_token
from ml_model import predict_disease
from PIL import Image
import io

app = FastAPI(title="AgriPulse API")

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:3000",
    "https://your-vercel-app.vercel.app"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"message": "AgriPulse Backend Running"}

# 🔐 SIGNUP
@app.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = User(
        email=user.email,
        hashed_password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "Account created successfully"}

# 🔑 LOGIN
@app.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user or not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token(user.email)

    return {"access_token": token}

# 🤖 PREDICTION
@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    # Check file type first
    if not file.content_type.startswith("image/"):
        return {
            "valid": False,
            "message": "Please upload a valid image file."
        }

    contents = await file.read()

    try:
        image = Image.open(io.BytesIO(contents)).convert("RGB")
    except Exception:
        return {
            "valid": False,
            "message": "Invalid image format."
        }

    # AI prediction
    disease, confidence = predict_disease(image)

    # If model cannot recognize a leaf
    if disease is None:
        return {
            "valid": False,
            "message": "Invalid image. Please upload a clear crop leaf image."
        }

    return {
        "valid": True,
        "disease": disease,
        "confidence": round(confidence, 2)
    }