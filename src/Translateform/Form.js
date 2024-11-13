import TextInput from './TextInput'
import React, { useState, useEffect } from 'react';
import SelectLang from '../Language/SelectLang';
import TranslateInput from '../ExternalService/TranslateInput';
import TranslateButton from './TranslateButton';
import TranslatedDisplay from './TranslatedDisplay';
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import './Form.css';

function Form() {
  const [Input, setInput] = useState('');
  const [TranslatedInput, setTranslatedInput] = useState('');
  const [FromLang, setFromLang] = useState("en");
  const [ToLang, setToLang] = useState("fr");
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null); 

  console.log(Input); 

  useEffect(() => {
    const selectedBookmark = JSON.parse(localStorage.getItem('selectedBookmark'));

    if (selectedBookmark) {
      console.log("Bookmark loaded in Form:", selectedBookmark);
      setInput(selectedBookmark.input);
      setTranslatedInput(selectedBookmark.translation);


      setFromLang(selectedBookmark.fromLang);
      console.log("Fromlang set to:", selectedBookmark.fromLang);
      setToLang(selectedBookmark.toLang);
      console.log("ToLang set to:", selectedBookmark.toLang);


      setTimeout(() => {
        console.log("clearing selectedBookmark from localstorage");
        localStorage.removeItem('selectedBookmark');
      }, 100);
    }
  }, []);

  const GetTranslation = async () => {
    setLoading(true);
    setError('');
    setTranslatedInput("Translating...")


    try {
      const translations = await TranslateInput(Input, FromLang, ToLang);
      setTranslatedInput(translations);


      if (translations && !Error) {
        const savedHistory = JSON.parse(localStorage.getItem('translationHistory')) || [];
        const alreadyExist = savedHistory.some(
          (entry) => entry.input === Input && entry.translation === translations
        );

        if (!alreadyExist) {
          const updatedHistory = [{ input: Input, translation: translations }, ...savedHistory];
          localStorage.setItem('translationHistory', JSON.stringify(updatedHistory));
        }
      } 
      console.log('Updated history in localStorage:', JSON.parse(localStorage.getItem('translationHistory')));

    } catch(err) {
      setError("Translation failure. Please try again")
      setTranslatedInput('');
    }
    setLoading(false);
  };

  const SwitchLang = () => {
    const temp = FromLang;
    setFromLang(ToLang);
    setToLang(temp);


    const tempText = Input;
    setInput(TranslatedInput);
    setTranslatedInput(tempText);
  };


  return (
    <div className="translate-form">
      <div className='language-dropdown'>
          <SelectLang 
            Lang={FromLang} 
            setLang={setFromLang}
          />
          <button onClick={SwitchLang} className='switch-button'>
            <HiOutlineSwitchHorizontal className='switch-icon'/>
            <span className='switch-tool'>Switch</span>
          </button>
          <SelectLang 
            Lang={ToLang} 
            setLang={setToLang}
          />
      </div>

      <div className='form-container'>
        <TextInput 
          Input={Input} 
          setInput={setInput} 
          TranslatedInput={TranslateInput}
          setTranslatedInput={setTranslatedInput}
        />
        <TranslateButton 
          onClick={GetTranslation} 
          disabled={!Input || Loading}
          />
        <TranslatedDisplay 
          inputtext={Input} 
          translatedtext={TranslatedInput} error={Error}
        />
      </div>
    </div>
  );
}

export default Form;