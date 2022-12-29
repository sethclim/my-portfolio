import React, { useState } from 'react';


import { HStack } from './LayoutComponents';

import Text from "../styles/text.module.scss"
import Button from "../styles/button.module.scss"

export default function Copy() {

  var [copyText, setCopyText] = useState("Copy")


  function resetcopy()
  {
    setCopyText("Copy")
  }

  function copyToClipboard() {
    navigator.clipboard.writeText("sethclim@gmail.com");
    setCopyText("Copied!")

    setTimeout(resetcopy, 2000)
  };

  return(
    <HStack h='100%' m="0 20px" alignItems='center' justifyContent='start'>
      <p className={Text.small} >sethclim@gmail.com</p> 
      <button className={Button.copy} onClick={copyToClipboard}>{copyText}</button>   
    </HStack>
  )
}   