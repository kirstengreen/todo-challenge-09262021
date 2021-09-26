import './Layout.css'

export default function Layout( {children} ) {
  return(
    <div className='page_container'>
      {children}
    </div>
  )
}