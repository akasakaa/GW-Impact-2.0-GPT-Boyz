from transformers import  pipeline


# Load locally saved model for inference
classifier = pipeline(
    "audio-classification",
    model="local_model/emotion-classifier",
    feature_extractor="local_model/emotion-classifier",  # important!
    framework="pt"
)

out = classifier("D:\\impactai\\test2\\static\\recordings\\recording_20250407_190744.wav")
print(out)
