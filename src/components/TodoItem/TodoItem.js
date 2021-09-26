export default function TodoItem( {key, name} ) {
  return (
    <li key={key}>
      {name}
    </li>
  )
}