import TextInput from './components/TextInput';
import React from 'react';
import { useState } from 'react';
import SelectLang from './components/SelectLang';


function App() {
  const [Input, setInput] = useState('');
  const [TranslatedInput, setTranslatedInput] = useState('');
  const [FromLang, setFromLang] = useState("en");
  const [ToLang, setToLang] = useState("fr");


  const GetTranslation = async () => {
    const translations = await TranslatedInput(Input, FromLang, ToLang);
    setTranslatedInput(translations)
  };
  return (
    <div className="App">
      <h1>Welcome to YouTranslate</h1>
      <TextInput input={Input} setinput={setInput}/>
      <SelectLang/>
    </div>
  );
}

export default App;