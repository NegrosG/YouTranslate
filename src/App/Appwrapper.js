import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Pages/home';
import Form from '../Translateform/Form';
import About from '../Pages/About';
import Collections from '../Pages/Bookmarks';
import Contact from '../Pages/Contact';
import History from '../Pages/History';
import './App.css';


function Appwrapper() {
  const [fromLang, setFromLang] = useState("en");
  const navigate = useNavigate();

    const LanguageSelect = (language) => {
    setFromLang(language);
    navigate('/translate', {state: {fromLang: language, focusInput: true} });
  };


  return (
    <div className='app-container'>
    <Sidebar/>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home fromLang={fromLang} LanguageSelect={LanguageSelect}/>}/>
          <Route path='/translate' element={<Form fromLang={fromLang}/>} />
          <Route path='/about' element={<About LanguageSelect={LanguageSelect}/>}/>
          <Route path='/bookmarks' element={<Collections LanguageSelect={LanguageSelect}/>}/>
          <Route path='/contact' element={<Contact LanguageSelect={LanguageSelect}/>}/>
          <Route path='/history' element={<History LanguageSelect={LanguageSelect}/>}/> 
        </Routes>
      </div>
      </div>
    );
};

export default Appwrapper;