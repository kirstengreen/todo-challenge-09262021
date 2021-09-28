import './AddTodoItem.css'

export default function AddListItem( {placeholderText, viewportWidth, mobileBreakpoint} ) {

  // Props: placeholderText

  return(
    <form className='add_todo_form'>
      <input
        className={`add_todo_input ${ viewportWidth > mobileBreakpoint ? 'add_todo_input__desktop' : '' }`}
        placeholder={placeholderText} 
      />
    </form>
  )
}