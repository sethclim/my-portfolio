import React, { useState } from 'react';

import { Text, Button, HStack } from '@chakra-ui/react'

export default function Copy() {

  var [copyText, setCopyText] = useState("Copy")

  function copyToClipboard() {
    navigator.clipboard.writeText("sethclim@gmail.com");
    setCopyText("Copied")
  };

  return(
    <HStack h='100%' alignItems='center' justifyContent='start' pt='6px' >
      <Text fontSize={20} >sethclim@gmail.com</Text> 
      <Button bg="#99999944" color="brand.dark" fontSize={10} padding={0} h="6" variant="just-outline" onClick={copyToClipboard}>{copyText}</Button>   
    </HStack>
  )
}   