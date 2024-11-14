import React from "react";
import './Popular.css';

function Popular({ onSelectLanguage }) {

    return (
        <div className="popular-trans">
            <span onClick={() => onSelectLanguage("en")} className="trans-link">English Translations</span>
            <span onClick={() => onSelectLanguage("de")} className="trans-link">German Translations</span>
            <span onClick={() => onSelectLanguage("es")} className="trans-link">Spanish Translations</span>
            <span onClick={() => onSelectLanguage("pt")} className="trans-link">Portuguese Translations</span>
            <span onClick={() => onSelectLanguage("fr")} className="trans-link">French Translations</span>
            <span onClick={() => onSelectLanguage("it")} className="trans-link">Italian Translations</span>
            <span onClick={() => onSelectLanguage("ja")} className="trans-link">Japanese Translations</span>
            <span onClick={() => onSelectLanguage("zh")} className="trans-link">Chinese Translations</span>
            <span onClick={() => onSelectLanguage("tr")} className="trans-link">Turkish Translations</span>
            <span onClick={() => onSelectLanguage("fi")} className="trans-link">Finnish Translations</span>
            <span onClick={() => onSelectLanguage("ko")} className="trans-link">Korean Translations</span>
            <span onClick={() => onSelectLanguage("lv")} className="trans-link">Latvian Translations</span>
        </div>
    );
}

export default Popular;