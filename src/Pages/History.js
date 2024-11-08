import React, { useEffect, useState } from 'react';

function History() {
    const [History, setHistory] = useState([]);


    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('translationHistory')) || [];
        console.log('Loaded history from localStorage:', savedHistory);
        setHistory(savedHistory);
    }, []);

    return (
        <div className='history-page'>
            <h1>Translation History</h1>
            {History.lenght === 0 ? (
                <p>No translation found.</p>
            ) : (
                <ul>
                    {History.map((item, index) => (
                        <li key={index}>
                            <p><strong>Original Text:</strong>{item.inputtext}</p>
                            <p><strong>Translated Text:</strong>{item.translatedtext}</p>
                            <p><strong>From:</strong>{item.fromlang} <strong>To:</strong>{item.tolang}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default History;