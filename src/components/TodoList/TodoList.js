import './TodoList.css'

export default function TodoList( {todos} ) {

  // Props: listItems

  return (
    <div>
      <ul>
        {todos.map( (todo, i) => (
          <li key={i}>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}