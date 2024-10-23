import React from 'react';

function TextInput({Input, setInput}) {
    return (
        <div>
            <inputbox 
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text here"
            />
        </div>
    );
}
export default TextInput