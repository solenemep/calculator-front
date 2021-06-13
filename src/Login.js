import { useWeb3 } from "web3-hooks"
import { Badge, Box, Flex, Heading, Spacer } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

const Login = () => {
  const [web3State, login] = useWeb3()
  return (
    <Flex my={5} alignItems="center">
      <Box p="2">
        <Heading size="md">Calculator Dapp</Heading>
      </Box>
      <Spacer />
      <Box>
        {!web3State.isLogged && (
          <Button onClick={login} width={24} bgColor="cyan.200">
            Log in
          </Button>
        )}
        {web3State.isLogged && <Badge>Logged with : {web3State.account}</Badge>}
      </Box>
    </Flex>
  )
}
export default Login
