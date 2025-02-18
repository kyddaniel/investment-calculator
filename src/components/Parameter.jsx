export default function Parameter({ initialValue, labelName, fieldID, updateParameter }) {

    return (
        <div>
            <label htmlFor="parameter">{ labelName }</label>
            <input name="parameter" type="number" required value={ initialValue } onChange={ (event) => updateParameter(fieldID, event.target.value) }/>
        </div>
    );
}