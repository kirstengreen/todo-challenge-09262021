import './TodoItem.css'

export default function TodoItem( {id, name} ) {
  return (
    <li key={id} className='todo_item'>
      <p>{name}</p>
      <p><img src='/img/icon__close.svg' alt='delete icon' /></p>
    </li>
  )
}