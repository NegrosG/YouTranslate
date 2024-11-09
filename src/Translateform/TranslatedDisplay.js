import React, { useEffect, useState } from 'react';
import TextToSpeech from '../TTS & STT/TextToSpeech';
import { PiCopySimpleFill } from 'react-icons/pi';
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import CopyText from '../CopyText/CopyText';
import './TranslatedDisplay.css';


function TranslatedDisplay ({ inputtext, translatedtext, error }) {

    const [isBookmarked, setisBookmarked] = useState(false);

    useEffect(() => {
        const savedBoomarks = JSON.parse(localStorage.getItem('bookmrks')) || [];
        const alreadyBookmarked = savedBoomarks.some(
            (bookmark) => bookmark.input === inputtext && bookmark.translation === translatedtext
        );
        setisBookmarked(alreadyBookmarked);
    }, [inputtext, translatedtext]);

    const createBookmark = () => {

        if(!translatedtext || error) {
            console.log("Bookmarking skipped because of error or empty translation");
            return;
        }
        const savedBoomarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

        const alreadyBookmarked =savedBoomarks.some(
            (bookmark) => bookmark.input === inputtext && bookmark.translation === translatedtext
        );

        if (!alreadyBookmarked) {
            const updatedBookmarks = [{input: inputtext , translation: translatedtext}, ...savedBoomarks];
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
            setisBookmarked(true);
        }
    }
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
            <button className='copy-button' onClick={() => CopyText(translatedtext)}>
                <PiCopySimpleFill size={26}/>
            </button>
            <button className='bookmark-button' onClick={createBookmark}>
                {isBookmarked ? <IoBookmark size={25}/> : <IoBookmarkOutline size={25}/>}
            </button>
        </div>
    );
}

export default TranslatedDisplay;