import React, { useEffect } from 'react'
import { useState } from 'react';

const Input = ({className, placeholder, setDisabled}) => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if(inputValue == '')
      setDisabled(true);
    else setDisabled(false);
  }, [inputValue]);
  return (
    <input type="text" className={className} placeholder={placeholder} value={inputValue} onChange={onChange}/>
  )
}

export default Input;
