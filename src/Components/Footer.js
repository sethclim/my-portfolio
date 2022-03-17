import React from "react";

import { Flex, Container, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Container maxW='container.lg' height="3em">
      <Flex alignItems="center" justifyContent="center" h="100%">
        <Text fontSize={12}>@Seth Climenhaga 2022</Text>
      </Flex>
    </Container>
  );
}

export default Footer;
