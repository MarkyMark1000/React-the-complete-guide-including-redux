import {useState} from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration>=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(
        prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: + newValue   //IMPORTANT - Plus forces string into a number
            };
        });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid ? <p className="center">Please enter duration greater than or equal to 1</p> : undefined}
      {inputIsValid ? <Results input={userInput} /> : undefined}
    </>
  )
}

export default App
