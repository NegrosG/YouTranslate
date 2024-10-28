import React from 'react';
import Form from './Form';
import TextInput from './TextInput';


function TranslateButton({onClick}) {
    return (
        <div>
            <button onClick={onClick} disabled>Translate</button>
        </div>
    );
}

export default TranslateButton;