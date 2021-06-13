import { CalculatorContextProvider } from "./context/CalculatorContext"
import Dapp from "./Dapp"

const App = () => {
  return (
    <CalculatorContextProvider>
      <Dapp />
    </CalculatorContextProvider>
  )
}

export default App
