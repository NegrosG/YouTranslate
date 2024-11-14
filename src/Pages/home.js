import React from 'react';
import Form from '../Translateform/Form';
import logo from './communication.jpeg';
import Footer from '../Footer/Footer';
import Popular from '../PopularTranslation/Popular';
import './Home.css'

function Home({ fromLang, focusInput, LanguageSelect }) {
    return (
        <div className='animated'>
            <div className='youtranslate-home'>
            <h1>YouTranslate</h1>
            </div>
            <Form fromLang={fromLang} focusInput={focusInput}/>
            <section className='youtranslate-content'>
                <div className='text-content'>
                    <h2>
                        Translator for 60+ languages
                    </h2>
                    <h5>
                        YouTranslate &mdash; synchronized translation for over 60 languages, predictive typing, Voice over, Bookmarking with numerous features to come, Powered by DeepL.
                    </h5>
                </div>
                <div className='image-content'>
                    <img src={logo} alt='animated communication pic'/>
                </div>
            </section>
            <Popular onSelectLanguage={LanguageSelect}/>
            <Footer/>
        </div>
    );
}

export default Home;