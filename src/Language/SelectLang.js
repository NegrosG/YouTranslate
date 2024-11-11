import React, { useEffect } from 'react';
import './SelectLang.css';

function SelectLang({ Lang, setLang }) {
    useEffect(() => {
        console.log("SelectLang component received Lang:", Lang);
    }, [Lang]);

    const languages = [
        { code: "en", name: "English" },
        { code: "fr", name: "French" },
        { code: "es", name: "Spanish" },
        { code: "de", name: "German" },
        { code: "pt", name: "Portuguese" },
        { code: "ar", name: "Arabic" },
    ];

    const orderedLanguages = [
        ...languages.filter((lang) => lang.code === Lang),
        ...languages.filter((lang) => lang.code !== Lang),
    ];

    
    return (
        <div className='select-box'>
            <select className="language-select" 
                value={Lang} 
                onChange={(e) => setLang(e.target.value)}
            >
                {orderedLanguages.map((lang) => (
                    <option
                        key={lang.code}
                        value={lang.code}
                        className={ Lang === lang.code ? 'selected-option' : 'unselected-option'}
                    >
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectLang;