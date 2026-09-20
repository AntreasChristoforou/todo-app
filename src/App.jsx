import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddForm from './AddForm'


function App() {
  const [todos, setTodos] = useState([
    {id:1 , text: "Plan weekend", done:false    },
    {id:2 , text: "Morning Workout", done:false }
  ]);
  
  const [filter , setFilter] = useState("All");

  function handleAdd(text){
    const newTodo = {id : Date.now() , text : text , done : false};
    setTodos([...todos , newTodo]);
   
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
      <AddForm onAdd={handleAdd}/>
    

      <TodoList visible={visible} toggleTodo={toggleTodo}  deleteTodo={deleteTodo}/>
      {visible.length > 0 && <p>{todos.filter( n  => n.done).length} of {todos.length} completed</p>}
      
      </div>
  )
}

export default App
