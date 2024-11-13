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
        { code: "bg", name: "Bulgarian" },
        { code: "ar", name: "Arabic" },
        { code: "cs", name: "Czech" },
        { code: "da", name: "Danish" },
        { code: "el", name: "Greek" },
        { code: "hu", name: "Hungarian" },
        { code: "et", name: "Estonian" },
        { code: "fi", name: "Finnish" },
        { code: "id", name: "Indonesian" },
        { code: "it", name: "Italian" },
        { code: "ja", name: "Japanese" },
        { code: "ko", name: "Korean" },
        { code: "lt", name: "Lithuanian" },
        { code: "lv", name: "Latvian" },
        { code: "nb", name: "Norwegian" },
        { code: "nl", name: "Dutch" },
        { code: "pl", name: "Polish" },
        { code: "ro", name: "Romanian" },
        { code: "sk", name: "Slovak" },
        { code: "sl", name: "Slovenian" },
        { code: "sv", name: "Swedish" },
        { code: "tr", name: "Turkish" },
        { code: "uk", name: "Ukrainian" },
        { code: "zh", name: "Chinese" },
        { code: "en-gb", name: "English(British" },
        { code: "en-us", name: "English(American)" },
        { code: "pt-br", name: "Portuguese(Brazillian)" },
        { code: "zh-hans", name: "Chinese(simplified)" },
        { code: "zh-hant", name: "Chinese(traditional" },
    ]

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