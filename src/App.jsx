import Header from "./components/Header";
import Parameters from "./components/Parameters";
import Calculation from "./components/Calculation";

import { calculateInvestmentResults } from "./util/investment";

import { useState } from "react";

function App() {

  const DATA = {
    "initialInvestment" : 0,
    "annualInvestment" : 0,
    "expectedReturn" : 0,
    "duration" : 0
  }

  const [ calculatedData, setCalculatedData ] = useState({
    "initialInvestment" : 0,
    "annualInvestment" : 0,
    "expectedReturn" : 0,
    "duration" : 0
  });

  function handleParameterUpdate(dataType, newValue) {
    //console.log("handleParameterUpdate", dataType, newValue);
    setCalculatedData(data => {
      return {
        ...data,
        [dataType] : +newValue // "+" convert the type to number, default is "string" if it is retrieved from <input>
      }
    });
  }

  //console.log(calculatedData);
  const annualData = calculateInvestmentResults({
    initialInvestment : calculatedData.initialInvestment,
    annualInvestment : calculatedData.annualInvestment,
    expectedReturn : calculatedData.expectedReturn,
    duration : calculatedData.duration
  });
  console.log(annualData);

  const inputIsValid = calculatedData.duration >= 1;

  return (
    <main>
      <Header/>
      <Parameters 
        initialData={ DATA }
        updateParameter={handleParameterUpdate}
      />
      { !inputIsValid && <p className="center">Please enter a duration greater than 0.</p> }
      { inputIsValid && <Calculation calculatedData={ calculatedData } /> }
    </main>
  )
}

export default App

// TODOs
// Add components to display header, fetch user input & output results  table
// Fetch and store user input
// Derive investment results with the utility functions
// Display results in HTML table (<table> <thead> <tbody> <tr> <th> <td>)
// Conditionally display info message if invalid duration was entered