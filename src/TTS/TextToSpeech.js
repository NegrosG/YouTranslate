import React from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

function TextToSpeech ({ text }) {
    const {speak, cancel, speaking} = useSpeechSynthesis();

    return (
        <div style={{
            display: 'inline-block',
            cursor: 'pointer'
        }}><FontAwesomeIcon
                icon={faVolumeUp}
                size="lg"
                onClick={() => speak({text})}
                title="Read Aloud"/>
        </div>
    );
}

export default TextToSpeech;