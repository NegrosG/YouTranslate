import React from 'react';
import TextToSpeech from '../TTS & STT/TextToSpeech';
import { PiCopySimpleFill } from 'react-icons/pi';
import CopyText from '../CopyText/CopyText';
import './TranslatedDisplay.css';


function TranslatedDisplay ({ translatedtext, error }) {
    return (
        <div className='translation-form'>
            <textarea className='translated'
            value={error || translatedtext}
            rows="12"
            cols="45"
            placeholder='Your text will be displayed here'
            disabled
            />
            <TextToSpeech className='text-speech' text={translatedtext} />
            <button className='copy-button' onClick={() => CopyText(translatedtext)}><PiCopySimpleFill size={26}/></button>
        </div>
    );
}

export default TranslatedDisplay;