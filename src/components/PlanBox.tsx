import { Flex, Text, Button, Colors } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Feature, { FeatureInterface } from "../../utils/Feature"

function PlanBox({ planName, price, color, featureNotValidIndexes }: PlanBoxProps) {
  const getAccentedColor = () => {
    let colorParts = color.split(".")
    let contrast = parseInt(colorParts[1][0])

    return `${colorParts[0]}.${contrast - 1}00`
  }

  return (
    <Flex
      borderRadius="10px"
      direction="column"
      width="23rem"
      bg="whiteAlpha.900"
      boxShadow="lg"
    >
      <Flex bg={color} justifyContent="center" p="1rem" letterSpacing=".1rem">
        <Text fontWeight="extrabold" fontSize="1.2rem">
          {planName}
        </Text>
      </Flex>
      <Flex direction="column" py="2rem" px="1rem" fontSize="1.1rem">
        {Object.keys(Feature).map((key) => (
          <Flex key={key} mb="1rem">
            <Text mr="1rem">
              {featureNotValidIndexes?.includes(key as keyof FeatureInterface)
                ? "❌"
                : "✅"}
            </Text>
            <Text>{Feature[key as keyof FeatureInterface]}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex
        bg={color}
        justifyContent="center"
        p="1rem"
        letterSpacing=".1rem"
        fontWeight="semibold"
        _hover={{ bg: getAccentedColor(), cursor: "pointer" }}
      >
        <Link to="/suscription">
          <Text>Comprar por ${price}/mes</Text>
        </Link>
      </Flex>
    </Flex>
  )
}

interface PlanBoxProps {
  planName: string
  price: number
  color: string
  featureNotValidIndexes?: [keyof FeatureInterface]
}

export default PlanBox
