import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {

    const invResults = calculateInvestmentResults(input);
    const initialInvestment = invResults[0].valueEndOfYear - invResults[0].interest - invResults[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {invResults.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalCapital = yearData.valueEndOfYear-totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}