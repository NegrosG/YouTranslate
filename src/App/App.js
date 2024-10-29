import React from 'react';
import Form from '../translatemain/Form';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './App.css';


function App() {
  return (
    <div className='app-container'>
      <h1>YouTranslate</h1>
      <Sidebar/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;