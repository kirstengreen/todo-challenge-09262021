import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList( {todos} ) {

  return (
    <ul>
      {todos.map( (todo, i) => (
        <TodoItem key={i} name={todo.name}/>
      ))}
    </ul>
  )
}