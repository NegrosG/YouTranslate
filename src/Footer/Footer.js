import React from 'react';
import './Footer.css';


const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='app-footer'>
            <p>&copy; {year} YouTranslate. All rights reserved. | Powered by DeepL.</p>
        </footer>
    );
}

export default Footer;