import { Flex, Text, Image } from "@chakra-ui/react"
import Header from "../components/Header"
import URL from "../../utils/URL"

function Download() {
  return (
    <Flex direction="column">
      <Header />
      <Flex my="2rem" mx="4rem" bg="orange.200" p="4rem" justifyContent="center" mt="4rem">
        <Flex direction="column" alignItems={"center"}>
          <Image src={URL.downloadIcon} width="64px" />
          <Text fontWeight={"extrabold"} fontSize="2rem">Gracias por elegirnos</Text>
          <Text fontSize={"1.1rem"}>¡Tu descarga empezará de inmediato!</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Download
