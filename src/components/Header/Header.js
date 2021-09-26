import './Header.css'

export default function Header( props ) {

  // Props: headerText

  return(
    <div>
      <h1>{props.headerText}</h1>
    </div>
  )
}