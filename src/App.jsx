import { useState } from "react"

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 6,
    duration: 10
})

const inputIsValid = userInput.duration >= 1 //garante que a duração seja um número acima de 1

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue //este + garante a conversão em number, evitando um bug nos cálculos
      }
  })
}

  return (
    <> {/* como o App só pode retornar um elemento, precisa usar o fragment aqui*/}
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput}/>} {/* só renderiza se a duração for maior que 1 */}
    </>
  )
}

export default App
