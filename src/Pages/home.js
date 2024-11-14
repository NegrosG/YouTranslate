import React from 'react';
import Form from '../Translateform/Form';
import logo from './communication.jpeg';
import './Home.css'

function Home() {
    return (
        <div className='animated'>
            <div className='youtranslate-home'>
            <h1>YouTranslate</h1>
            </div>
            <Form />
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
        </div>
    );
}

export default Home;