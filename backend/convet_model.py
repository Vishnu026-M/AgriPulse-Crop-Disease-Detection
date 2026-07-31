import tensorflow as tf
from tensorflow.keras import layers, Model
from tensorflow.keras.applications import MobileNetV2

IMG_SIZE = 224
NUM_CLASSES = 17

# Build the model using Functional API
inputs = tf.keras.Input(shape=(IMG_SIZE, IMG_SIZE, 3))

base_model = MobileNetV2(
    input_shape=(IMG_SIZE, IMG_SIZE, 3),
    include_top=False,
    weights=None
)

x = base_model(inputs, training=False)
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dense(128, activation="relu")(x)
x = layers.Dropout(0.4)(x)
outputs = layers.Dense(NUM_CLASSES, activation="softmax")(x)

new_model = Model(inputs, outputs)

# Load the old model
old_model = tf.keras.models.load_model("crop_disease_model.keras")

# Copy weights
new_model.set_weights(old_model.get_weights())

# Save new model
new_model.save("crop_disease_model_render.keras")

print("Done!")