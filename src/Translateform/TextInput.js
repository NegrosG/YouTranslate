import React, { useEffect, forwardRef } from 'react';
import CopyText from '../CopyText/CopyText';
import './TextInput.css';
import { PiCopySimpleLight } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";
import TextToSpeech from '../TTS & STT/TextToSpeech';

const TextInput = forwardRef(({ Input, setInput, TranslatedInput, setTranslatedInput }, ref) => {
    const maxLength = 1000;
    const shrink = 180;

    const InputChange = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        if (ref?.current) {
            if (Input.length > shrink) {
                ref.current.classList.add('shrink-text');
            } else {
                ref.current.classList.remove('shrink-text');
            }
        }
    }, [Input.length, ref]);

    return (
        <div className='text-form'>
            <textarea 
                className='text-input'
                value={Input}
                onChange={InputChange}
                placeholder="Start typing"
                ref={ref}
                maxLength={maxLength}
            />
            {Input && (
                <button 
                    className='clear-button'
                    onClick={() => { 
                        setInput('');
                        setTranslatedInput('');
                    }}
                >
                    <MdOutlineClear />
                </button>
            )}
            <div className='feature-box'>
                <TextToSpeech className="speech-icon" text={Input} />
                <span className='speech-tool'>Voice Over</span>
                <button onClick={() => CopyText(Input)}>
                    <PiCopySimpleLight size={25} className='copy'/>
                    <span className='copy-tool'>Copy</span>
                </button>
            </div>
            <div className='character-counter'>
                {Input.length} / {maxLength}
            </div>
        </div>
    );
});

export default TextInput;
