import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList( {todos, deleteTodo, toggleComplete, viewportWidth, mobileBreakpoint } ) {

  return (
    <ul className={`todo_list_container ${ viewportWidth > mobileBreakpoint ? 'todo_list_container__desktop' : '' }`}>
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