import styles from './AddTodoItem.css'

export default function AddListItem( props ) {

  // Props: placeholderText

  return(
    <input
      placeholder={props.placeholderText} 
    />
  )
}