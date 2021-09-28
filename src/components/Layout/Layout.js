import './Layout.css'

export default function Layout( {children, mobileBreakpoint, viewportWidth} ) {
  return(
    <div>
      <div 
        className={` page_header_bg ${ viewportWidth > mobileBreakpoint ? 'page_header_bg__desktop' : '' }`}></div>
      <div 
        className={`page_container ${ viewportWidth > mobileBreakpoint ? 'page_container__desktop' : '' }`}>
        {children}
      </div>
    </div>
  )
}