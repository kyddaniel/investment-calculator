import { formatter } from "../util/investment";

export default function Calculation({ annualData }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                { annualData.map((data, index) => (
                    <tr key={index}>
                        <td>{ data.year }</td>
                        <td>{ formatter.format(data.valueEndOfYear) }</td>
                        <td>{ formatter.format(data.interest) }</td>
                        <td>{ formatter.format(data.interest) }</td>
                        <td>{ formatter.format(data.annualInvestment) }</td>
                    </tr>
                )) }
            </tbody>
        </table>
    );
}