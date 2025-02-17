import Header from "./components/Header";
import Parameters from "./components/Parameters";
import Calculation from "./components/Calculation";

function App() {
  return (
    <main>
      <div id="header">
        <Header/>
      </div>
      <div id="user-input">
        <Parameters />
      </div>
      <div id="result">
        <Calculation />
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