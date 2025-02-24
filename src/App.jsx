import Header from "./components/Header";
import Parameters from "./components/Parameters";
import Calculation from "./components/Calculation";

import { calculateInvestmentResults } from "./util/investment";

import { useState } from "react";

function App() {

  const DATA = {
    "initInvest" : 0,
    "annualInvest" : 0,
    "expextedReturn" : 0,
    "duration" : 0
  }

  const [ calculatedData, setCalculatedData ] = useState({
    "initInvest" : 0,
    "annualInvest" : 0,
    "expextedReturn" : 0,
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
    initialInvestment : calculatedData.initInvest,
    annualInvestment : calculatedData.annualInvest,
    expectedReturn : calculatedData.expextedReturn,
    duration : calculatedData.duration
  });
  console.log(annualData);

  return (
    <main>
      <Header/>
      <Parameters 
        initialData={ DATA }
        updateParameter={handleParameterUpdate}
      />
      <div id="result">
        <Calculation initInvest={calculatedData.initInvest} annualInvest={calculatedData.annualInvest} expextedReturn={calculatedData.expextedReturn} duration={calculatedData.duration} annualData={ annualData } />
      </div>
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