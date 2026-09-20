import { useState } from 'react'


function AddForm({onAdd}) {
    const [text , setText] = useState("");

    function handleSubmit() {
    onAdd(text);
    setText("");
    }

    return(
        <>
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={handleSubmit}>Add</button>
        </>
    )
       
    
}

export default AddForm;