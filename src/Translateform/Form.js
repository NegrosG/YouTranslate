import TextInput from './TextInput'
import React, { useState } from 'react';
import SelectLang from '../Language/SelectLang';
import TranslateInput from '../ExternalService/TranslateInput';
import TranslateButton from './TranslateButton';
import TranslatedDisplay from './TranslatedDisplay';
import './Form.css';

function Form() {
  const [Input, setInput] = useState('');
  const [TranslatedInput, setTranslatedInput] = useState('');
  const [FromLang, setFromLang] = useState("en");
  const [ToLang, setToLang] = useState("fr");
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null); 

  console.log(Input); 

  const GetTranslation = async () => {
    setLoading(true);
    setError('');
    setTranslatedInput("Translating...")


    try {
      const translations = await TranslateInput(Input, FromLang, ToLang);
      setTranslatedInput(translations);

      const newTranslation = {
        inputtext: Input,
        translatedtext: translations,
        fromlang: FromLang,
        tolang: ToLang
      };

      if (translations && ! Error) {
      const savedHistory = JSON.parse(localStorage.getItem('translationHistory')) || [];
      const updatedHistory = [newTranslation, ...savedHistory];
      localStorage.setItem('translationHistory', JSON.stringify(updatedHistory));
    } console.log('Updated history in localStorage:', JSON.parse(localStorage.getItem('translationHistory')));

    } catch(err) {
      setError("Translation failure. Please try again")
      setTranslatedInput('');
    }
    setLoading(false);
  };
  return (
    <div className="translate-form">
      <div className='language-dropdown'>
        <SelectLang Lang={FromLang} setLang={setFromLang}/>
        <SelectLang Lang={ToLang} setLang={setToLang}/>
      </div>
      <div className='form-container'>
        <TextInput Input={Input} setInput={setInput}/>
        <TranslateButton onClick={GetTranslation} disabled={!Input || Loading}/>
        <TranslatedDisplay translatedtext={TranslatedInput} error={Error}/>
      </div>
    </div>
  );
}

export default Form;