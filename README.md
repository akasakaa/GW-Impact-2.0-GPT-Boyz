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


Demonstration:
Landing Page:
![image](https://github.com/user-attachments/assets/ffc186b3-603a-4a80-a31e-7661c1ccccae)
![image](https://github.com/user-attachments/assets/65352761-bb6e-4a4f-b878-7f4660147f2a)
![image](https://github.com/user-attachments/assets/caf56a94-2467-47a0-9f80-428fdf9c892e)

Signup/Login Page:
![image](https://github.com/user-attachments/assets/f9ccbb80-7c8a-4ffc-92f3-346ae5bfebab)

Dashboard Page:
![image](https://github.com/user-attachments/assets/8b4bd995-18e6-4459-a821-95cb27d80577)
When User starts recording:
![image](https://github.com/user-attachments/assets/7f4da51c-349b-40ef-b218-601dd5da1d16)
When User stops recording, the AI model is processing the input to come up with a speech output.
![image](https://github.com/user-attachments/assets/ad85f733-aef9-4f7f-ae5b-1bc8d17eca6c)

Simple Navbar:
Consisting of the dashboard, settings, logout and analytics pages.
![image](https://github.com/user-attachments/assets/e9667930-90bf-459c-ad34-57212cc24a8a)

Settings Page:
![image](https://github.com/user-attachments/assets/abf76a39-db27-4de3-8fb6-2bdc0aaaeda3)
![image](https://github.com/user-attachments/assets/3b665a7d-fa9c-44b3-b2a9-3bf6702bcc78)

Analytics Page:
A line graph to visualize mood trends throughout the week.
![image](https://github.com/user-attachments/assets/0f89ac41-8322-4bf9-b28e-035ddfd7453f)





