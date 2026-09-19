import { useState } from 'react'
import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {id:1 , text: "Plan weekend", done:false    },
    {id:2 , text: "Morning Workout", done:false }
  ]);
  const [text , setText] = useState("");

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
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
      {todos.map( todo => 
        (
         
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <button onClick={() => toggleTodo(todo.id)}>{todo.done ? "🟢" : "🔘"}</button>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
        )
       )}
       </ul>
      </div>
  )
}

export default App
