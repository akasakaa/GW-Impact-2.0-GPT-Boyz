# AI for Mental Health Support

An AI-powered web application designed to provide mental health support through voice-based interactions. This tool analyzes user behavior and speech patterns to generate empathetic responses, offer personalized coping mechanisms, and connect users to professional help when necessary.

## 🧠 Key Features

- 🎤 **Voice-to-Voice Support**: Users can speak freely, and the AI responds with natural-sounding speech.
- 🧘 **Personalized Coping Mechanisms**: Based on user input, the AI suggests tailored support strategies.
- 🌐 **Intelligent AI Responses**: Integrates with Google's Gemini for understanding and generating natural, context-aware responses.
- 🔊 **Customizable Voice Settings**: Users can adjust voice speed, style, and emotional tone.
- 📊 **User Behavior Tracking** *(optional)*: Detects speech frequency and tone to identify stress or emotional shifts.
- 🧑‍⚕️ **Crisis Escalation Support** *(future scope)*: Automatically offers professional help if high-risk behavior is detected.

## 🛠️ Tech Stack

| Layer           | Technology                         |
|----------------|-----------------------------        |
| Frontend        | React.js, Material UI              |
| Backend         | Flask (Python)                     |
| Speech-to-Text  | Whisper / SpeechRecognition        |
| Text-to-Speech  | ElevenLabs API                     |
| AI Model        | Gemini Pro (Google AI) +           |
|                 | wav2vec2-speech-emotion-recognition|
| Database        | MongoDB (for logs & stats)         |
| Deployment      | Flask server + static build        |

## ⚙️ How It Works

1. **User Speaks**: Audio is recorded through the browser and sent to the backend.
2. **Speech Recognition**: The recorded voice is transcribed using the STT module.
3. **AI Understanding**: The transcription is passed to the Gemini API for intelligent, empathetic responses.
4. **Speech Generation**: ElevenLabs synthesizes a human-like voice response using selected voice settings.
5. **Playback**: The AI’s response is played back to the user.
6. **Feedback Loop**: Optional logging and monitoring for emotional well-being tracking.

## 🔧 Settings Management

Users can customize their experience through the **Settings Page**, adjusting:

- Voice (e.g. Rachel, Domi, etc.)
- Speed, stability, style, and similarity boost
- Mic sensitivity
- Ability to delete previous voice data

All settings persist between sessions and directly influence the ElevenLabs voice model.

1. **Clone the repo**
git clone https://github.com/akasakaa/GW-Impact-2.0-GPT-Boyz.git


**Future Enhancements**

- User journaling and long-term mental wellness tracking.
- Emergency contact alert system.
- Language and cultural adaptation.
