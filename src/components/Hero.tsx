import { Flex, Text, Image, Button } from "@chakra-ui/react"
import URL from "../../utils/URL"

function Hero() {
  return (
    <Flex padding="2rem" paddingRight={0}>
      <Flex direction="column" width="61rem" m="5rem" mt="7rem">
        <Flex align="center" mb="2rem">
          <Image src={URL.logo} width="24px" mr=".3rem" />
          <Text fontWeight="extrabold">Sexy Browser</Text>
        </Flex>
        <Flex direction="column" mb="3rem">
          <Flex direction="column" mb="1rem">
            <Text
              as="del"
              color="gray.400"
              fontWeight="extrabold"
              fontSize="3rem"
            >
              Pelea con las pestañas
            </Text>
            <Text fontWeight="extrabold" fontSize="3rem">
              Ámalas 🧡
            </Text>
          </Flex>
          <Text letterSpacing=".1rem" fontSize="1.1rem" color="gray.600">
            Conoce el primer navegador que organiza tu trabajo.
          </Text>
          <Text letterSpacing=".1rem" fontSize="1.1rem" color="gray.600">
            Una ventana. Muchos espacios de trabajo. Todas las pestañas.
          </Text>
        </Flex>
        <Flex direction="column" width="15rem">
          <Button background="orange.100" _hover={{ background: "orange.200" }}>
            <Image src={URL.downloadIcon} width="16px" />
            <Text ml="1rem">Descargar</Text>
          </Button>
          <Flex
            justifyContent="center"
            fontSize=".8rem"
            mt=".4rem"
            color="gray.600"
          >
            <Text mr=".2rem">¡Es</Text>
            <Text fontWeight="bold" mr=".2rem">
              súper fácil
            </Text>
            <Text>de configurar!</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* -> */}
      <Flex width="100%" mt="2rem">
        <Image src={URL.heroImg} />
      </Flex>
    </Flex>
  )
}

export default Hero
