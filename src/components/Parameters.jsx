import Parameter from "./Parameter";

export default function Parameters({ initialData, updateParameter }) {
    return (
        <>
            <div className="input-group">
                <Parameter labelName="INITIAL INVESTMENT" fieldID="initInvest" updateParameter={ updateParameter } />
                <Parameter labelName="ANNUAL INVESTMENT" fieldID="annualInvest" updateParameter={ updateParameter }/>
            </div>
            <div className="input-group">
                <Parameter labelName="EXPEXTED RETURN" fieldID="expextedReturn" updateParameter={ updateParameter }/>
                <Parameter labelName="DURATION" fieldID="duration" updateParameter={ updateParameter }/>
            </div>
        </>
    );
}