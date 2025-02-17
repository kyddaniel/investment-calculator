export default function Parameter({ labelName, value }) {
    return (
        <div>
            <label for="parameter">{ labelName }</label>
            <input name="parameter" />
        </div>
    );
}