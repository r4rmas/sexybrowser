import { Flex, Text } from "@chakra-ui/react"
import Feature, { FeatureInterface } from "../../utils/Feature"

function PlanBox({ planName, featureNotValidIndexes, color }: PlanBoxProps) {
  return (
    <Flex borderRadius="10px" direction="column" width="25rem">
      <Flex bg={color || "whiteAlpha.900"} justifyContent="center" p="1rem" letterSpacing=".1rem">
        <Text fontWeight="extrabold" fontSize="1.2rem">{planName}</Text>
      </Flex>
      <Flex direction="column" p="1rem" fontSize="1.1rem">
        {Object.keys(Feature).map((key) => (
          <Text key={key}>{Feature[key as keyof FeatureInterface]}</Text>
        ))}
      </Flex>
    </Flex>
  )
}

interface PlanBoxProps {
  planName: string, 
  featureNotValidIndexes?: [number], 
  color?: string
}

export default PlanBox
