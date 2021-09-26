import './TodoItem.css'

export default function TodoItem( {key, name} ) {
  return (
    <li key={key} className='todo_item'>
      <p>{name}</p>
      <p><img src='/img/icon__close.svg' alt='delete icon' /></p>
    </li>
  )
}