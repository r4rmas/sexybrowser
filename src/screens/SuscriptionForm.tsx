import { Flex, Text, Button, FormControl, FormLabel, Input, Grid, GridItem} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

function SuscriptionForm() {
  return (
    <Flex direction="column">
      <Header />
      <Flex direction={"column"} py="2rem" px="4rem">
        <Title title="Información personal" />
        <Grid templateColumns={"repeat(3, 1fr)"} gap="1rem" mb="2rem">
          <GridItem>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Apellido</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Correo electrónico</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Repita la contraseña</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
        </Grid>

        <Title title="Información de tarjeta" />
        <Grid templateColumns={"repeat(3, 1fr)"} mb="2rem" gap="1rem">
          <GridItem>
            <FormControl>
              <FormLabel>Nombre en la tarjeta</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Número de tarjeta</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>CVV</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Fecha de expiración</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
        </Grid>

        <Title title="Dirección de facturación" />
        <Grid templateColumns={"repeat(3, 1fr)"} mb="2rem" gap="1rem">
          <GridItem>
            <FormControl>
              <FormLabel>Pais</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Provincia</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Ciudad</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Dirección</FormLabel>
              <Input />
            </FormControl>
          </GridItem>
        </Grid>

        <Flex justifyContent={"flex-end"}>
          <Link to="/download">
            <Button bg={"orange.300"} _hover={{ bg: "orange.200" }}>
              <Text>Aceptar</Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

function Title({ title }: { title: string }) {
  return <Text fontWeight={"extrabold"} fontSize="1.1rem" mb="1rem">{title}</Text>
}

export default SuscriptionForm
