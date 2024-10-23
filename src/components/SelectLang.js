import React from 'react';

function SelectLang({ Lang, setLang }) {
    return (
        <div>
            <select value={Lang} onChange={(e) => setLang(e.target.value)}>
                <option value={"en"}>English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
            </select>
        </div>
    );
}

export default SelectLang