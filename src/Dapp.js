import { Container, Flex } from "@chakra-ui/layout"
import Calculator from "./Calculator"
import Donate from "./Donate"
import Login from "./Login"

const Dapp = () => {
  return (
    <Container maxW="80ch" minH="100vh" py={16}>
      <Flex direction="column">
        <Login />

        <Calculator />

        <Donate />
      </Flex>
    </Container>
  )
}
export default Dapp
