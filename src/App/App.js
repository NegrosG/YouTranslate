import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/home'
import About from '../Pages/About';
import Collections from '../Pages/Bookmarks';
import Contact from '../Pages/Contact';
import History from '../Pages/History';
import Footer from '../Footer/Footer';
import './App.css';


function App() {
  return (
    <Router>
    <div>
    <Sidebar/>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/bookmarks' element={<Collections/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/history' element={<History/>}/> 
        </Routes>
      </div>
      <Footer />
      </div>
    </Router>
    );
};

export default App;