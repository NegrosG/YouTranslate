import React from 'react';
import Form from '../translatemain/Form';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './App.css';


function App() {
  return (
    <div>
      <Sidebar/>
      <div className='app-container'>
        <div>
        <h1>YouTranslate</h1>
        <p>The world is closer to you.</p>
        </div>
        <Form/>
        <Footer/>
      </div>
    </div>
    );
};

export default App;