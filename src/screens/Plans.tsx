import { Flex, Text } from "@chakra-ui/react"
import PlanBox from "../components/PlanBox"

function Plans() {
  return (
    <Flex>
      <Text>¡Elige el plan que más te guste!</Text>
      <PlanBox planName="👨🏻‍🎓 Estudiante" color="green.200" />
    </Flex>
  )
}

export default Plans
