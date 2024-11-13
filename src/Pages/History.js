import React, { useEffect, useState } from 'react';
import './History.css';

function History() {
    const [History, setHistory] = useState([]);
    const [ModalOpen, setModalopen] = useState(false);
    const [ModalContent, setModalContent] = useState("");


    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('translationHistory')) || [];
        console.log('Loaded history from localStorage:', savedHistory);
        setHistory(savedHistory);
    }, []);

    const ClearHistory = () => {
        localStorage.removeItem('translationHistory')
        setHistory([]);
    }

    const openModal = (content) => {
        setModalContent(content);
        setModalopen(true);
    }

    const closeModal = () => {
        setModalopen(false);
        setModalContent("");
    }

    return (
        <div className='history-page'>
            <h2>Translation history &rarr;</h2>
            {History.length === 0 ? (
                <p>No translation found.</p>
            ) : (
                <div>
                    <button onClick={ClearHistory} className="clear-history">
                        Clear
                    </button>
                <div className="history-list">
                    {History.map((item, index) => (
                        <div className="history-item" 
                            key={index}
                            onClick={() => openModal(`${item.input}\n${item.translation}`)}    
                        >
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

            {ModalOpen && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation}>
                        <button onClick={closeModal} className='close-modal'><strong>X</strong></button>
                        <p>{ModalContent}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default History;