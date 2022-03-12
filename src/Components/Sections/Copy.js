import React, { useRef, useState } from 'react';

import { Text, VStack,Container, Flex, Spacer, Button } from '@chakra-ui/react'
import { IoCopy } from 'react-icons/io5';

export default function Copy() {

  function copyToClipboard() {
    navigator.clipboard.writeText("sethclim@gmail.com");
  };


  return(
    <Button bg="white" padding="3" onClick={copyToClipboard}>
      <Text>sethclim@gmail.com</Text> <IoCopy />
    </Button>
  )

}