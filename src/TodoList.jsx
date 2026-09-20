import TodoItem from './TodoItem'

function TodoList({ visible , toggleTodo, deleteTodo}) {
    


    return(
        <>
        
        {visible.length === 0 && <p>All caught up</p>}
        <ul>
        {visible.map(  todo => 
        (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo}/>
        ))}
      
        </ul>
        
          
        </>
        )
       
    
}

export default TodoList;