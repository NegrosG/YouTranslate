import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { languages } from '../Language/SelectLang';
import { HiPlus } from 'react-icons/hi';
import './Bookmarks.css';
import Footer from '../Footer/Footer';
import Popular from '../PopularTranslation/Popular';

function Collections({ LanguageSelect }) {
    const [Bookmarks, setBookmarks] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        console.log('Loaded bookmarks from localStorage:', savedBookmarks);
        setBookmarks(savedBookmarks);
    }, []);

    const BookmarkClick = (bookmark) => {
      const bookmarkwithlang ={
        ...bookmark,
        fromLang: bookmark.fromLang || 'es',
        toLang: bookmark.toLang || 'fr'
      };

        localStorage.setItem('selectedBookmark', JSON.stringify(bookmarkwithlang));
        console.log("Selected Bookmark stored in localStorage:", JSON.parse(localStorage.getItem('selectedBookmark')));
        navigate('/');
    };


    const ClearBookmarks = () => {
        localStorage.removeItem('bookmarks')
        setBookmarks([]);
    }

    const navigateToForm = () => {
      navigate('/', { state: { focusInput: true } });
    };

    return (
    <div className="bookmark-page">
    <h2>My Collections &#10132;</h2>
    <div className='addbookmark-container'>
        <button className='add-btn'
          onClick={navigateToForm}>
            <HiPlus className="icon-plus"/>New Collection</button>
    </div>
    {Bookmarks.length === 0 ? (
      <p>No bookmarks found.</p>
    ) : (
      <div>
        <button onClick={ClearBookmarks} className="clear-bookmark">
          Clear
        </button>
      <div className="bookmark-list">
        {Bookmarks.map((bookmark, index) => (
          <div 
              className="bookmark-item" 
              key={index}
              onClick={() => BookmarkClick(bookmark)}>
            <div className="bookmark-input">
              <strong>{bookmark.sourceLanguage || bookmark.fromLang}:</strong> {bookmark.input}
            </div>
            <div className="bookmark-translation">
              <strong>{bookmark.targetLanguage || bookmark.toLang}:</strong> {bookmark.translation}
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
  <Popular onSelectLanguage={LanguageSelect}/>
  <Footer/>
  </div>
  );
}

export default Collections;