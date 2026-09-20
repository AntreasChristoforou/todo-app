import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {id:1 , text: "Plan weekend", done:false    },
    {id:2 , text: "Morning Workout", done:false }
  ]);
  const [text , setText] = useState("");
  const [filter , setFilter] = useState("All");

  function handleAdd(){
    const newTodo = {id : Date.now() , text : text , done : false};
    setTodos([...todos , newTodo]);
    setText("");
  } 

  function toggleTodo(id){
  setTodos(todos.map(t => t.id === id ? {...t , done: !t.done} : t));
  }
  
  function deleteTodo(id){
  setTodos(todos.filter(t => t.id !== id));
  }

  const visible = todos.filter(t => {
    if (filter === "Active") return !t.done;
    if (filter === "Done") return t.done;
    return true;
})
  return (
    <div>
      <button onClick={() => setFilter("All")} >All</button> 
       <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Done")}>Done</button>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      {visible.length === 0 && <p>All caught up</p>}
      <ul>
      {visible.map( todo => 
        (
          
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <button onClick={() => toggleTodo(todo.id)}>{todo.done ? "🟢" : "🔘"}</button>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
        )
       )}
       </ul>
        {visible.length > 0 && <p>{todos.filter( n  => n.done).length} of {todos.length} completed</p>}
      </div>
  )
}

export default App
