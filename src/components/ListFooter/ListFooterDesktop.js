export default function ListFooterDesktop( {activeCount, deleteCompleted, allFilter, activeFilter, completeFilter } ) {
  return (
    <div className='list_footer_options'>
      <div className="items_left">
        {activeCount} items left
      </div>
      <div className='list_footer_filters'>
        <div className='list_action' onClick={ () => allFilter() }>All</div>
        <div className='list_action' onClick={ () => activeFilter() }>Active</div>
        <div className='list_action' onClick={ () => completeFilter() }>Completed</div>
      </div>
      <div className='list_action' onClick={ () => deleteCompleted() }>
        Clear completed
      </div>
    </div>
  )
}