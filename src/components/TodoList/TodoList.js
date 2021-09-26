import './TodoList.css'

export default function TodoList( props ) {

  // Props: listItems

  return (
    <div>
      <ul>
        <li>{props.listItems}</li>
      </ul>
    </div>
  )
}