import './Layout.css'

export default function Layout( {children} ) {
  return(
    <div>
      <div className='page_header_bg'></div>
      <div className='page_container'>
        {children}
      </div>
    </div>
  )
}