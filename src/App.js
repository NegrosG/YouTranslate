import TextInput from './components/TextInput';
import React from 'react';
import { useState } from 'react';

function App() {
  const [Input, setInput] = useState('');
  const [TranslatedInput, setTranslatedInput] = useState('');


  const GetTranslation = async () => {
    const translations = await TranslatedInput(Input)
    setTranslatedInput(translations)
  };
  return (
    <div className="App">
      <h1>Welcome to YouTranslate</h1>
      <TextInput input={Input} setinput={setInput}/>
    </div>
  );
}

export default App;