from transformers import AutoFeatureExtractor, AutoModelForAudioClassification, pipeline
import os
import pandas as pd

# Load locally saved model
classifier = pipeline(
    "audio-classification",
    model="local_model/emotion-classifier",
    feature_extractor="local_model/emotion-classifier",
    framework="pt"
)

folder_path = 'D:\\impactai\\test2\\static\\recordings'

results = []

for filename in os.listdir(folder_path):
    file_path = os.path.join(folder_path, filename)
    if os.path.isfile(file_path):
        prediction = classifier(file_path)
        
        # Take top prediction
        top_pred = prediction[0]
        
        results.append({
            'filename': filename,
            'top_label': top_pred['label'],
            'top_score': top_pred['score'],
            
        })

df = pd.DataFrame(results)

print(df)
df.to_csv('results.csv', index=False)
