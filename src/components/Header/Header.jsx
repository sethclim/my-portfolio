//Components
import {Logo} from "../SVG/SVGs";
import { HStack } from "../LayoutComponents";

const Header = () => {

  return (
    <HStack alignItems="center" h='6em' justifyContent="space-between">
      <Logo
        fill={'#fff'}
        width={"2em"}
        hieght={"auto"}
        className="logo" />
      {/* <Switch id='email-alerts' onChange={toggleColorMode} /> */}
    </HStack>
  );
}

export default Header;