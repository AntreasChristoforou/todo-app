import { useState } from 'react'
import './App.css'

function AddForm({onAdd}) {
    const [text , setText] = useState("");

    function handleSubmit() {
    onAdd(text);
    setText("");
    }

    return(
        <span className="inputs">
        <input placeholder="Add a new task..." value={text} onChange={e => setText(e.target.value)}/>
        <button className="addtask"onClick={handleSubmit}>+</button>
        </span>
    )
       
    
}

export default AddForm;