import TextInput from '../translatemain/TextInput'
import React, { useState } from 'react';
import SelectLang from '../Language/SelectLang';
import TranslateInput from '../ExternalService/TranslateInput';
import TranslateButton from '../translatemain/TranslateButton';
import TextToSpeech from '../TTS & STT/TextToSpeech';
import { PiCopySimpleFill } from "react-icons/pi";
import CopyText from '../CopyText/CopyText';
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
    } catch(err) {
      setError("Translation failure. Please try again")
      setTranslatedInput('');
    }
    setLoading(false);
  };
  return (
    <div className="translate-form">
      <div className='language-dropdowm'>
        <SelectLang Lang={FromLang} setLang={setFromLang}/>
        <SelectLang Lang={ToLang} setLang={setToLang}/>
      </div>
      <div>
      <div>
        <TextInput Input={Input} setInput={setInput}/>
        <TextToSpeech text={Input}/>
      </div>
      <TranslateButton onClick={GetTranslation} disabled={!Input || Loading}/>
      <div>
        <textarea className='translated' 
        value={Error || TranslatedInput} 
        rows="15" cols="55" 
        placeholder='Your text will be displayed here' 
        disabled/>
        <button onClick={() => CopyText(TranslatedInput)}><PiCopySimpleFill size={23}/></button>
        <TextToSpeech text={TranslatedInput}/></div>
      </div>
    </div>
  );
}

export default Form;