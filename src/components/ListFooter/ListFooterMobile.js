import { Fragment } from 'react'

export default function ListFooterMobile( {activeCount, deleteCompleted} ) {
  return (
    <Fragment>
      <div className='list_footer_options'>
        <div className="items_left">
          {activeCount} items left
        </div>
        <div className='list_action' onClick={ () => deleteCompleted() }>
          Clear completed
        </div>
      </div>
      <div className='list_footer_filters__mobile'>
        <div className='list_action'>All</div>
        <div className='list_action'>Active</div>
        <div className='list_action'>Completed</div>
      </div>
    </Fragment>
  )
}