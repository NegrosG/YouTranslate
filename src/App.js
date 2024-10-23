import TextInput from './components/InputArea';
import React from 'react';
import { useState } from 'react';

function App() {
  const [Input, setInput] = useState('');


  
  return (
    <div className="App">
      <h1>This is a refined translation app</h1>
      <TextInput input={Input} setinput={setInput}/>
    </div>
  );
}

export default App;