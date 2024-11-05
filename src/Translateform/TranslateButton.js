import React from 'react';


function TranslateButton({ onClick, disabled }) {
    return (
        <div>
            <button onClick={onClick}
            disabled={disabled}>Translate</button>
        </div>
    );
}

export default TranslateButton;