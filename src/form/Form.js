import { useState } from "react";
import './formStyles.css'

function Form({onCalculate,onRes}){
    const [userInput, setUserInput] = useState({currentSavings:'', yearlySavings:'', interest:'', duration:''}) ;

    const handleChange = (e) => {
        setUserInput ((currData) => {
            return{
                ...currData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(userInput);
    };

    const handleReset = () =>{
        setUserInput ( {
            currentSavings:'',
            yearlySavings:'',
            interest:'',
            duration:''
        })
        onRes();
    }
    
    return(
        <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
        <div className="input-group">
        <p>
            <label htmlFor="currentSavings">Current Savings ($)</label>
            <input 
                type="number" 
                id="currentSavings"
                name="currentSavings"
                onChange={handleChange}
                value={userInput.currentSavings}
            />
        </p>
        <p>
            <label htmlFor="yearlySavngs">Yearly Savings ($)</label>
            <input 
                type="number" 
                id="yearlySavings"
                name="yearlySavings"
                onChange={handleChange}
                value={userInput.yearlySavings}
            />
        </p>
        </div>
        <div className="input-group">
        <p>
            <label htmlFor="interest">
            Expected Interest (%, per year)
            </label>
            <input 
                type="number" 
                id="interest"
                name="interest"
                onChange={handleChange}
                value={userInput.interest} />
        </p>
        <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input  
                type="number" 
                id="duration"
                name="duration"
                onChange={handleChange}
                value={userInput.duration}/>
        </p>
        </div>
        <p className="actions">
        <button type="reset" className="buttonAlt">
            Reset
        </button>
        <button type="submit" className="button">
            Calculate
        </button>
        </p>
    </form>
    )
}

export default Form;