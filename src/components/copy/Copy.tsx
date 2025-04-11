import { useState } from 'react';


import { HStack } from '../LayoutComponents';

import Text from "../../styles/text.module.scss"
import Button from "../../styles/button.module.scss"

import styles from "./style.module.scss"

const Copy = () => {

  const [copyText, setCopyText] = useState("Click to Copy!")


  function resetcopy()
  {
    setCopyText("Click to Copy!")
  }

  function copyToClipboard() {
    navigator.clipboard.writeText("sethclim@gmail.com");
    setCopyText("Copied!")

    console.log("copying")

    setTimeout(resetcopy, 2000)
  };

  return(
    <div className={styles.wrapper} onClick={copyToClipboard}>
      <HStack h='100%' m="0 20px" alignItems='center' justifyContent='start' className={styles.copyWrap}  >
        <p className={Text.small} >sethclim@gmail.com</p> 
        {/* <button className={Button.copy} onClick={copyToClipboard}>{copyText}</button>    */}
        <svg className={styles.copySVG} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z" clipRule="evenodd"/>
          <path fillRule="evenodd" d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" clipRule="evenodd"/>
        </svg>
      </HStack> 
      <div className={styles.infoBox}>{copyText}</div>
    </div>
  )
}   

export default Copy;