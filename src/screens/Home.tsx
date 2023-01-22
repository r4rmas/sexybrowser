import { Flex, Image, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import URL from "../../utils/URL"

function Home() {
  return (
    <Flex padding="2rem" pr={0}>
      <Flex direction="column" minW="24rem" width="45rem" ml="5rem" mr="4rem" mt="2rem">
        <Flex mb="2rem">
          <Image src={URL.logo} width="24px" mr=".3rem" />
          <Text fontWeight="bold">Sexy Browser</Text>
        </Flex>
        <Flex mb="2rem">
          <Text color="gray.400" fontWeight="extrabold" fontSize="2rem">
            Un nuevo navegador que trabaja más rápido ⚡️
          </Text>
        </Flex>
        <Flex
          letterSpacing=".1rem"
          direction="column"
          fontSize="1.1rem"
          mb="3rem"
        >
          <Text as="p" mb="1rem">
            <Text as="span" mr=".3rem">Sexy Browser tiene como objetivo acelerar su computadora al dejar</Text>
            <Text as="ins">que la nube haga el trabajo pesado</Text>
            <Text as="span" mr=".3rem">.</Text>
            <Text as="span">
              Completa trabajos intensos, ten más pestañas abiertas y realiza
              múltiples tareas sin el ruido del ventilador.
            </Text>
          </Text>
          <Flex>
            <Text>
              ¡Sexy Browser consume 10 veces menos RAM que Google Chrome!
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" width="15rem" alignItems="center">
          <Link to="/planes" style={{ width: "100%", marginBottom: ".4rem" }}>
            <Button
              background="orange.200"
              _hover={{ background: "orange.300" }}
              width="100%"
            >
              <Image src={URL.downloadIcon} width="16px" mr="1rem" />
              <Text>Descargar</Text>
            </Button>
          </Link>
          <Text as="p" color="gray.600">
            <Text as="span" mr=".2rem">¡Es</Text>
            <Text as="b" mr=".2rem">súper fácil</Text> 
            <Text as="span">de usar!</Text>
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Image src={URL.heroImg} />
      </Flex>
    </Flex>
  )
}

export default Home
