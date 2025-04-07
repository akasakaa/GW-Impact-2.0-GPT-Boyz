import React, { useState, useRef } from "react";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const micRef = useRef(null);

  const toggleRecording = async () => {
    if (isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        let audioChunks = [];

        recorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          // You can upload to Firebase Storage here if needed
          console.log("Audio recorded", audioBlob);
        };

        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
      } catch (err) {
        console.error("Mic access denied or error:", err);
      }
    }
  };

  return (
    <div
      onClick={toggleRecording}
      ref={micRef}
      className={`w-24 h-24 rounded-full bg-[#89d6dc] flex items-center justify-center text-white text-3xl mb-4 shadow-inner cursor-pointer transition-transform ${
        isRecording ? "animate-pulse scale-110" : ""
      }`}
    >
      🎙️
    </div>
  );
};

export default VoiceRecorder;
