import React, { useEffect, useState } from 'react';

function History() {
    const [History, setHistory] = useState([]);


    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('translationHistory')) || [];
        console.log('Loaded history from localStorage:', savedHistory);
        setHistory(savedHistory);
    }, []);

    const ClearHistory = () => {
        localStorage.removeItem('translationHistory')
        setHistory([]);
    }

    return (
        <div className='history-page'>
            <h2>History</h2>
            {History.lenght === 0 ? (
                <p>No translation found.</p>
            ) : (
                <div>
                    <button onClick={ClearHistory} className="clear-history">
                        Clear History
                    </button>
                <div className="history-list">
                    {History.map((item, index) => (
                        <div className="history-item" key={index}>
                            <div className="history-input">
                                <strong>Input:</strong> {item.input}
                            </div>
                            <div className="history-translation">
                                <strong>Translation:</strong> {item.translation}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
}

export default History;