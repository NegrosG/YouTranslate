import React from 'react';
import Form from '../translatemain/Form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';


function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;