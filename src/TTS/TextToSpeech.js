import React from 'react';
import { useSpeechSynthesis} from 'react-speech-kit';

function TextToSpeech ({ text }) {
    const {speak, cancel, speaking} = useSpeechSynthesis();

    return (
        <div>
            <button onClick={() => speak({text})} disabled={speaking}>
                {speaking ? 'Speaking...' : 'Read Aloud'}
            </button>
            <button onClick = {cancel} disabled={!speaking}>
                stop
            </button>
        </div>
    );
}

export default TextToSpeech;