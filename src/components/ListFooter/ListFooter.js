import './ListFooter.css'
import ListFooterMobile from './ListFooterMobile'
import ListFooterDesktop from './ListFooterDesktop'

export default function ListFooter( {activeCount, deleteCompleted, viewportWidth, mobileBreakpoint, allFilter, activeFilter, completeFilter } ) {

  return (
    <div className={`footer_container ${ viewportWidth > mobileBreakpoint ? 'footer_container__desktop' : '' }`}>
      { viewportWidth < mobileBreakpoint ? (
        <ListFooterMobile activeCount={activeCount} deleteCompleted={deleteCompleted} />
      ) : (
        <ListFooterDesktop 
        activeCount={activeCount} 
        deleteCompleted={deleteCompleted} 
        allFilter={allFilter}
        activeFilter={activeFilter}
        completeFilter={completeFilter}/>
      )
    }
  </div>
  )
}