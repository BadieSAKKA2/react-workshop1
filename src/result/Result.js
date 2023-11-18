import './resultStyles.css'

function Result({yearlyData}) {

    return(
        <div>
            <table className="result">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                </thead>
                <tbody>
                {yearlyData.map((i) => (
                    <tr>
                        <td>{i.year}</td>
                        <td>{i.savingsEndOfYear.toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</td>
                        <td>{i.yearlyInterest.toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</td>
                        <td>{i.totalInterest.toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</td>
                        <td>{i.investedCapital.toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</td>
                        
                    </tr>
                ))}

                </tbody>
        </table>
      </div>
    )
}

export default Result;