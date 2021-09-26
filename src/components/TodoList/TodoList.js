import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList( {todos, deleteTodo} ) {

  return (
    <ul className='todo_list_container'>
      {todos.map( (todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
      ))}
    </ul>
  )
}