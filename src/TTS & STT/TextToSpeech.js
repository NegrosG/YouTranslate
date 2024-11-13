import React from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import { HiSpeakerWave } from "react-icons/hi2";
import './tts.css';

function TextToSpeech ({ text }) {
    const {speak} = useSpeechSynthesis();

    return (
        <button>
            <HiSpeakerWave onClick={() => speak({text})} size={25}/>
        </button>
    );
}

export default TextToSpeech;