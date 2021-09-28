import './Header.css'

export default function Header( {headerText, viewportWidth, mobileBreakpoint } ) {

  return(
    <h1 
      className={`${ viewportWidth > mobileBreakpoint ? 'h1__desktop' : '' }`}>
      {headerText}
    </h1>
  )
}