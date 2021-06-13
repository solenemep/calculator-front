import { useState } from "react"
import { useWeb3 } from "web3-hooks"
import { ethers } from "ethers"
import { Flex, Spacer } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import { FormLabel } from "@chakra-ui/form-control"
import { Button } from "@chakra-ui/button"

const Donate = () => {
  const [web3State, login] = useWeb3()
  const [value, setValue] = useState(0)

  const handleClick = async () => {
    const amount = ethers.utils.parseEther(value)
    try {
      const tx = await web3State.signer.sendTransaction({
        to: "0x1016b9010ca7b7dd875a7a5031355ab79fb248cf",
        value: amount,
      })
      await tx.wait()
      console.log("TX MINED")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Flex my={5}>
      <Spacer />

      <Flex direction="column" alignContent="end">
        <FormLabel htmlFor="value"></FormLabel>
        <Input
          value={value}
          m={1}
          width={24}
          id="value"
          placeholder="amount"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          m={1}
          width={24}
          bgColor="cyan.200"
          type="button"
          onClick={handleClick}
        >
          Donate
        </Button>
      </Flex>
    </Flex>
  )
}
export default Donate
