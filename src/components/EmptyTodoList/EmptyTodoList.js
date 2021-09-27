import './EmptyTodoList.css'

export default function EmptyTodoList( {message} ) {
  return(
    <div className='empty-todo-container'>
      {message}
    </div>
  )
}