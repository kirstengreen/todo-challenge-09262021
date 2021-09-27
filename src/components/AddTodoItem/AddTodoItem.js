import './AddTodoItem.css'

export default function AddListItem( props ) {

  // Props: placeholderText

  return(
    <form className='add_todo_form'>
      <input
        className='add_todo_input'
        placeholder={props.placeholderText} 
      />
    </form>
  )
}