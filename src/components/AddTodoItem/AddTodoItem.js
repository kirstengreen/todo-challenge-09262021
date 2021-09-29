import { useState } from 'react'
import './AddTodoItem.css'

export default function AddListItem( {addTodo, placeholderText, viewportWidth, mobileBreakpoint} ) {

  const [ name, setName ] = useState('')
  const [ complete ] = useState(false)


  // HANDLE SUBMIT
  const onSubmit = (event) => {
    event.preventDefault()

    if( name === '' ) {
      return
    }

    addTodo( {name, complete} )
    setName('')
  }


  return(
    <form className='add_todo_form' onSubmit={onSubmit}>
      <input
        className={`add_todo_input ${ viewportWidth > mobileBreakpoint ? 'add_todo_input__desktop' : '' }`}
        value={name}
        placeholder={placeholderText} 
        onChange={ (event) => setName(event.target.value) }
      />
    </form>
  )
}