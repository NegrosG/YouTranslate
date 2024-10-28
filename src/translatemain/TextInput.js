import React from 'react';

function TextInput({Input, setInput}) {
    return (
        <div>
            <textarea
            style={{ 
                resize: 'none', 
                width: '50%', 
                padding: '8px', 
                border: '1px solid #ccc', 
                backgroundColor: '#ffffff'
            }}
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