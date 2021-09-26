import styles from './AddListItem.css'

export default function AddListItem( props ) {

  // Props: placeholderText

  return(
    <input
      placeholder={props.placeholderText} 
    />
  )
}