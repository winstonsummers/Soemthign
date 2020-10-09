import React, { useState, MouseEvent } from 'react';
import './App.css';
import Button from './ui/shared/Button';

function App() {
  const [disabled, setDisabled] = useState(false)
  const onClick = (evt: MouseEvent) => {
    console.log(evt)
    setDisabled(!disabled)
  }
  return (
    <div className="App">
      <Button 
        text="hello"
        onClick={onClick}
        disabled={disabled}
      />
      <Button
        text="reset"
        onClick={onClick}
        disabled={!disabled}
      />
    </div>
  );
}

export default App;
