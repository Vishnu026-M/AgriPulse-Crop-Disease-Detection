import tensorflow as tf

# Load the old model
model = tf.keras.models.load_model("crop_disease_model.h5")

# Save it in the new Keras format
model.save("crop_disease_model.keras")

print("Model converted successfully!")