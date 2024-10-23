import TextInput from './components/TextInput';
import React from 'react';
import { useState } from 'react';

function App() {
  const [Input, setInput] = useState('');
 //const [TranslatedInput, setTranslatedInput] = useState('');


  
  return (
    <div className="App">
      <h1>Welcome to YouTranslate</h1>
      <TextInput input={Input} setinput={setInput}/>
    </div>
  );
}

export default App;