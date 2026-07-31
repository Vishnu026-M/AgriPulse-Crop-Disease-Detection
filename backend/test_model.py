import tensorflow as tf

model = tf.keras.models.load_model("crop_disease_model.h5")

print("Model loaded successfully!")