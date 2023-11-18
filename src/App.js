import { useState } from 'react';
import Header from './header/Header'
import Form from './form/Form'
import Result from './result/Result'

function App() {
  const [yearData, setYearData] = useState([]);
  const calculateHandler = (userInput) => {
      // Should be triggered when form is submitted
      // You might not directly want to bind it to the submit event on the form though...
  
      const yearlyData = []; // per-year results
  
      let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput['interest'] / 100;
      const duration = +userInput['duration'];
      let totInterest = 0;
      let invCapital = currentSavings;

      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        totInterest += yearlyInterest;
        invCapital += yearlyContribution;
        //investedCapital += ((i+1) * yearlyInterest) + currentSavings;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
          totalInterest: totInterest,
          investedCapital: invCapital,
        });
      }
  
      setYearData([...yearlyData])
  };

  const onRes=() =>{
    setYearData([]);
  }
  return (
    <div>
      
      <Header/>
      <Form onCalculate = {calculateHandler} onRes={onRes}/>
      {yearData && yearData.length > 0 && <Result yearlyData={yearData}/>}
      {yearData.length === 0 && <h3>No data to show</h3>}

    </div>
  );
}

export default App;
