import React from 'react';
import { HiSpeakerWave } from "react-icons/hi2";


function TextToSpeech({ text }) {
    const Speak = () => {
        if (!window.speechSynthesis) {
            console.error("Text-to-speech is not supported in this browser.");
            return;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance)
    }
    return (
        <button onClick={Speak}>
            <HiSpeakerWave size={25} />
        </button>
    );
}


export default TextToSpeech;