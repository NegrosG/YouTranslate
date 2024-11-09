import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Collections() {
    const [Bookmarks, setBookmarks] = useState([]);
    


    useEffect(() => {
        const savedBoomarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        console.log('Loaded bookmarks from localStorage:', savedBoomarks);
        setBookmarks(savedBoomarks);
    }, []);


    const ClearBookmarks = () => {
        localStorage.removeItem('bookmarks')
        setBookmarks([]);
    }

    return (
        
    <div className="bookmarks-page">
    <h2>Bookmarks</h2>
    {Bookmarks.length === 0 ? (
      <p>No bookmarks found.</p>
    ) : (
      <div>
        <button onClick={ClearBookmarks} className="clear-bookmarks">
          Clear Bookmarks
        </button>
        <div className="bookmark-list">
          {Bookmarks.map((bookmark, index) => (
            <div className="bookmark-item" key={index}>
              <div className="bookmark-input">
                <strong>Original Text:</strong> {bookmark.input}
              </div>
              <div className="bookmark-translation">
                <strong>Translation:</strong> {bookmark.translation}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
    );
}

export default Collections;