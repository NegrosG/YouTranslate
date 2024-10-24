import TextInput from './components/TextInput';
import React, { useState } from 'react';
import SelectLang from './components/SelectLang';
import TranslateInput from './ExternalService/TranslateInput';
import TranslateButton from './components/TranslateButton';

function App() {
  const [Input, setInput] = useState('');
  const [TranslatedInput, setTranslatedInput] = useState('');
  const [FromLang, setFromLang] = useState("en");
  const [ToLang, setToLang] = useState("fr");

  const GetTranslation = async () => {
    const translations = await TranslateInput(Input, FromLang, ToLang);
    setTranslatedInput(translations)
  };
  return (
    <div className="App">
      <h1>Welcome to YouTranslate</h1>
      <TextInput Input={Input} setInput={setInput}/>
      <SelectLang Lang={FromLang} setLang={setFromLang}/>
      <SelectLang Lang={ToLang} setLang={setToLang}/>
      <TranslateButton onClick={GetTranslation}/>
      <textarea value={TranslatedInput} rows="15" cols="55" placeholder='Your text will be displayed here' disabled/>
    </div>
  );
}

export default App;