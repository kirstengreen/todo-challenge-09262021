import { Fragment } from 'react'
import './ListFooter.css'

export default function ListFooter( {deleteCompleted, viewportWidth, mobileBreakpoint} ) {

  return (
    <div className='footer_container'>
      { viewportWidth < mobileBreakpoint ? (
        <Fragment>
          <div className='list_footer_options'>
            <div className="items_left">
              # items left
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
      ) : (
        <Fragment>
          <div className='list_footer_options'>
            <div className="items_left">
              # items left
            </div>
            <div className='list_footer_filters'>
              <div className='list_action'>All</div>
              <div className='list_action'>Active</div>
              <div className='list_action'>Completed</div>
            </div>
            <div className='list_action' onClick={ () => deleteCompleted() }>
              Clear completed
            </div>
          </div>
        </Fragment>
      )
    }
  </div>
  )
}