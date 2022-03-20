import React, { useState } from 'react';

import { Text, Button, HStack } from '@chakra-ui/react'

export default function Copy() {

  var [copyText, setCopyText] = useState("Copy")

  function copyToClipboard() {
    navigator.clipboard.writeText("sethclim@gmail.com");
    setCopyText("Copied")
  };

  return(
    <HStack>
      <Text fontSize={20} variant='hover'>sethclim@gmail.com</Text> 
      <Button bg="#99999944" color="white" fontSize={10} padding={0} h="6" variant="just-outline" onClick={copyToClipboard}>{copyText}</Button>
          
    </HStack>
  )
}   