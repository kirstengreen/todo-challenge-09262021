import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList( {todos, deleteTodo, toggleComplete, viewportWidth, mobileBreakpoint } ) {

  return (
    <ul className='todo_list_container'>
      {todos.map( (todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          viewportWidth={viewportWidth}
          mobileBreakpoint={mobileBreakpoint} />
      ))}
    </ul>
  )
}