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
      <img src='/img/icon__close.svg' alt='delete icon' onClick={ () => deleteTodo(todo.id) } />
    </li>
  )
}