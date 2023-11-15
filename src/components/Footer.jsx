import React from "react";


import Text from "../styles/text.module.scss"

import { HStack } from "./LayoutComponents";

function Footer() {
  return (
      <HStack alignItems="center" justifyContent="center" h="5em">
        <p  className={`${Text.small}`}>@Seth Climenhaga 2023</p>
      </HStack>
  );
}

export default Footer;
  