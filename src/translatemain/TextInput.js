import React from 'react';

function TextInput({Input, setInput}) {
    return (
        <div>
            <textarea
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text here"
            rows="15"
            cols="55"
            />
        </div>
    );
}
export default TextInput