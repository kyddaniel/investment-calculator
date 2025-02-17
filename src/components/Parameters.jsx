import Parameter from "./Parameter";

export default function Parameters() {
    return (
        <>
            <div className="input-group">
                <Parameter labelName="INITIAL INVESTMENT" />
                <Parameter labelName="ANNUAL INVESTMENT" />
            </div>
            <div className="input-group">
                <Parameter labelName="EXPEXTED RETURN" />
                <Parameter labelName="DURATION" />
            </div>
        </>
    );
}