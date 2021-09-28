import './EmptyTodoList.css'

export default function EmptyTodoList( {message, viewportWidth, mobileBreakpoint} ) {
  return(
    <div className={`empty-todo-container ${ viewportWidth > mobileBreakpoint ? 'empty-todo-container__desktop' : '' }`}>
      {message}
    </div>
  )
}