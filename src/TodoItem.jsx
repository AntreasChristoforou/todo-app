

function TodoItem({ todo, onToggle, onDelete }) {
    


    return(
        
        
          
          <li className={todo.done ? "done" : ""}>
            <button onClick={() => onToggle(todo.id)}>{todo.done ? "🟢" : "🔘"}</button>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>❌</button>
            </li>
        )
       
    
}

export default TodoItem;