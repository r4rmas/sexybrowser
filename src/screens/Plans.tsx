import { Flex, Text } from "@chakra-ui/react"
import PlanBox from "../components/PlanBox"
import Header from "../components/Header"

function Plans() {
  return (
    <Flex direction="column" width="100%" mb="2rem">
      <Header />
      <Flex p="2rem" direction="column">
        <Text
          textAlign="center"
          fontWeight="extrabold"
          fontSize="2rem"
          color="gray.600"
          mb="4rem"
        >
          ¡Elige el plan que más te guste!
        </Text>
        <Flex justifyContent="center">
          <Flex mr="3rem">
            <PlanBox
              planName="👨🏻‍🎓 Estudiante"
              color="green.200"
              price={3.99}
              featureNotValidIndexes={[
                "workstations",
                "splitpages",
                "tor",
                "chromeextensions",
              ]}
            />
          </Flex>
          <Flex mr="3rem">
            <PlanBox
              planName="👨🏻‍💻 Básico"
              color="blue.200"
              price={5.99}
              featureNotValidIndexes={["tor", "chromeextensions"]}
            />
          </Flex>
          <Flex>
            <PlanBox planName="🏆 Pro" color="yellow.200" price={9.99} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Plans
