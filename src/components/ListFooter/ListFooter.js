import './ListFooter.css'
import ListFooterMobile from './ListFooterMobile'
import ListFooterDesktop from './ListFooterDesktop'

export default function ListFooter( {deleteCompleted, viewportWidth, mobileBreakpoint} ) {

  return (
    <div className='footer_container'>
      { viewportWidth < mobileBreakpoint ? (
        <ListFooterMobile deleteCompleted={deleteCompleted} />
      ) : (
        <ListFooterDesktop deleteCompleted={deleteCompleted} />
      )
    }
  </div>
  )
}