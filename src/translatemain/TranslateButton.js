import React from 'react';

function TranslateButton({onClick}) {
    return (
        <div>
            <button onClick={onClick}>Translate</button>
        </div>
    );
}

export default TranslateButton