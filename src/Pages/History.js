import React, { useEffect, useState } from 'react';
import './History.css';
import Footer from '../Footer/Footer';
import Popular from '../PopularTranslation/Popular';

function History({ LanguageSelect }) {
    const [History, setHistory] = useState([]);
    const [ModalOpen, setModalopen] = useState(false);
    const [ModalContent, setModalContent] = useState({
        sourcetext: "",
        targettext: "",
        sourceLanguage: "",
        targetLanguage: ""
    });


    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('translationHistory')) || [];
        console.log('Loaded history from localStorage:', savedHistory);
        setHistory(savedHistory);
    }, []);

    const ClearHistory = () => {
        localStorage.removeItem('translationHistory')
        setHistory([]);
    }

    const openModal = (sourcetext, targettext, sourceLanguage, targetLanguage) => {
        setModalContent({ sourcetext, targettext, sourceLanguage, targetLanguage });
        setModalopen(true);
    }

    const closeModal = () => {
        setModalopen(false);
        setModalContent({ sourcetext: "", targettext: "", sourceLanguage: "", targetLanguage: "" });
    }

    return (
        <div className='history-page'>
            <h2>Translation history &#10132;</h2>
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
                            onClick={() => openModal(item.input, item.translation, item.sourceLanguage, item.targetLanguage)}    
                        >
                            <div className="history-input">
                                <strong>{item.sourceLanguage}:</strong> {item.input}
                            </div>
                            <div className="history-translation">
                                <strong>{item.targetLanguage}:</strong> {item.translation}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            )}

            {ModalOpen && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation}>
                        <button onClick={closeModal} className='close-modal'><strong>x</strong></button>
                        <p><strong>{ModalContent.sourceLanguage}:</strong><br />{ModalContent.sourcetext}</p>
                        <p><strong>{ModalContent.targetLanguage}:</strong><br />{ModalContent.targettext}</p>
                    </div>
                </div>
            )}
            <Popular onSelectLanguage={LanguageSelect}/>
            <Footer/>
        </div>
    );
}

export default History;