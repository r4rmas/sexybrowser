import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import URL from "../../utils/URL";

function Header() {
  return (
    <Flex width="100%" justifyContent="flex-start" px="2rem" py="1.5rem" boxShadow="md">
      <Link to="/">
        <Flex>
          <Image src={URL.logo} width="24px" mr=".3rem" />
          <Text fontWeight="bold">Sexy Browser</Text>
        </Flex>
      </Link>
    </Flex>
  )
}

export default Header