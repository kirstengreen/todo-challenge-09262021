import './TodoItem.css'

export default function TodoItem( {todo, deleteTodo} ) {
  return (
    <li className='todo_item_container'>
      <div className='todo_item'>
        <label htmlFor={todo.name}>
          {todo.name}
          <input type='checkbox' name={todo.name} id={todo.name} />
          <span className='checkbox'></span>
        </label>
      </div>
      <div className='delete_icon' onClick={ () => deleteTodo(todo.id) }>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
        </svg>
      </div>
    </li>
  )
}