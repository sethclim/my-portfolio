import React from "react";
import Bitbucket from "../SVG/bitbucket";
import External from "../SVG/external";

import { Flex, Spacer, Container, HStack, VStack, Text, Image } from '@chakra-ui/react'

export const Project = ({title,desc, tech, gitLink, link, img }) => {
  return (
    <Container  maxW='container.lg'  >
      <HStack  w="100%">
        <VStack align="start">

          <Flex w="100%">
            <Text fontSize="2xl">{title}</Text>
            <Spacer />
            <HStack>
            {
              tech.map(item => {
                return <Text>{item}</Text>
              })
            }
            </HStack>
          </Flex>
    
          <Container padding="0" width={500}>
            <Text fontSize="sm">{desc}</Text>
          </Container>

         <HStack>
            <a
              className="projectLinks1"
              href={gitLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Bitbucket className="github" />
            </a>
            <div className="projectLinks2">
              {link && <External className="external" />}
            </div>
          </HStack>
          
          
        </VStack>

        <HStack w="100%" h="100%" justify="center">
                  <Image boxSize='500px'     objectFit='contain'  src={img} alt="img" />
        </HStack>
      </HStack>
    </Container>
  );
}