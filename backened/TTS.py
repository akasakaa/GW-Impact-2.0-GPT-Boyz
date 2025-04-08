import time
import os
from elevenlabs.client import ElevenLabs

client = ElevenLabs(api_key="sk_fd1cc94945a508fb2fccb2ec31b7f74a0633c0e155249eee")

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
RECORDINGS_DIR = os.path.join(BASE_DIR, 'static', 'output')
os.makedirs(RECORDINGS_DIR, exist_ok=True)

def generate_audio(text: str) -> str:
    """
    Generates speech from text using ElevenLabs and saves it to /static/output/ with a timestamp-based filename.
    Returns the absolute file path.
    """
    audio_generator = client.generate(
        text=text,
        voice="Rachel",
        model="eleven_flash_v2_5"
    )

    audio_bytes = b"".join(audio_generator)

    timestamp = int(time.time())
    output_filename = f"output_{timestamp}.mp3"
    output_path = os.path.join(RECORDINGS_DIR, output_filename)

    with open(output_path, "wb") as f:
        f.write(audio_bytes)

    print(f"Audio file saved at {output_path}")

    return output_filename  # returns full path like /home/user/project/static/output/output_1712507771.mp3



