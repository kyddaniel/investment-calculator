import Parameter from "./Parameter";

export default function Parameters({ initialData, updateParameter }) {
    return (
        <section id="user-input">
            <p className="input-group">
                <Parameter labelName="INITIAL INVESTMENT" fieldID="initialInvestment" updateParameter={ updateParameter } />
                <Parameter labelName="ANNUAL INVESTMENT" fieldID="annualInvestment" updateParameter={ updateParameter }/>
            </p>
            <p className="input-group">
                <Parameter labelName="EXPEXTED RETURN" fieldID="expectedReturn" updateParameter={ updateParameter }/>
                <Parameter labelName="DURATION" fieldID="duration" updateParameter={ updateParameter }/>
            </p>
        </section>
    );
}