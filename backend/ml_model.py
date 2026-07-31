import tensorflow as tf
import numpy as np
from PIL import Image
import os
import cv2
import numpy as np

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "crop_disease_model.keras")

model = tf.keras.models.load_model(
    MODEL_PATH,
    compile=False
)

class_names = [
    'Corn_(maize)___Cercospora_Leaf_Spot Gray_Leaf_Spot',
    'Corn_(maize)___Common_Rust_',
    'Corn_(maize)___Healthy',
    'Corn_(maize)___Northern_Leaf_Blight',
    'Potato___Early_Blight',
    'Potato___Healthy',
    'Potato___Late_Blight',
    'Tomato___Bacterial_Spot',
    'Tomato___Early_Blight',
    'Tomato___Healthy',
    'Tomato___Late_Blight',
    'Tomato___Leaf_Mold',
    'Tomato___Septoria_Leaf_Spot',
    'Tomato___Spider_Mites Two-Spotted_Spider_Mite',
    'Tomato___Target_Spot',
    'Tomato___Tomato_Mosaic_Virus',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus'
]

def clean_label(label):
    label = label.replace("___", " - ")
    label = label.replace("_", " ")
    label = label.replace("(maize)", "Maize")
    return label

def preprocess_image(image: Image.Image):
    image = image.resize((224, 224))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image

def predict_disease(image: Image.Image):
    processed = preprocess_image(image)
    predictions = model.predict(processed)[0]

    confidence = float(np.max(predictions)) * 100
    class_index = np.argmax(predictions)

    disease = clean_label(class_names[class_index])

    if confidence < 70:
        return None, confidence

    return disease, confidence
def is_leaf_image(image):
    img = np.array(image)
    hsv = cv2.cvtColor(img, cv2.COLOR_RGB2HSV)

    lower_green = np.array([35, 40, 40])
    upper_green = np.array([85, 255, 255])

    mask = cv2.inRange(hsv, lower_green, upper_green)

    green_ratio = np.sum(mask > 0) / mask.size

    return green_ratio > 0.05