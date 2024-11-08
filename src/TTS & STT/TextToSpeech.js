import React from 'react';
import {useSpeechSynthesis} from 'react-speech-kit';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

function TextToSpeech ({ text }) {
    const {speak} = useSpeechSynthesis();

    return (
        <div style={{
            display: 'inline-block',
            cursor: 'pointer'
        }}><FontAwesomeIcon
                icon={faVolumeUp}
                size="lg"
                onClick={() => speak({text})}
                title="Speaker"/>
        </div>
    );
}

export default TextToSpeech;