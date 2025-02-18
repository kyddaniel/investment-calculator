import { useState } from "react";

export default function Parameter({ initialValue, labelName, fieldID, updateParameter }) {

    const [ newValue, setNewValue ] = useState(initialValue);

    function handleValueChange(event) {
        //setNewValue(event.target.value);
        updateParameter(fieldID, event.target.value);
    }

    return (
        <div>
            <label htmlFor="parameter">{ labelName }</label>
            <input name="parameter" type="number" value={ newValue } onChange={ handleValueChange }/>
        </div>
    );
}