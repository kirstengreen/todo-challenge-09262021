import './TodoItem.css'

export default function TodoItem( {todo, deleteTodo} ) {
  return (
    <li className='todo_item'>
      <p>{todo.name}</p>
      <p><img src='/img/icon__close.svg' alt='delete icon' onClick={ () => deleteTodo(todo.id) }/></p>
    </li>
  )
}