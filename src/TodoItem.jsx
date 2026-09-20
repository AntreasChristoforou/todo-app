

function TodoItem({ todo, onToggle, onDelete }) {
    


    return(
        
        
          
          <li className={todo.done ? "done" : ""}>
                <button className={todo.done ? "check done" : "check"} onClick={() => onToggle(todo.id)}>{todo.done ? "✓" : ""}</button>
            {todo.text}
            <button className="removeitem" onClick={() => onDelete(todo.id)}><img src="images/trash.png"/></button>
            </li>
        )
       
    
}

export default TodoItem;