export default function ListFooterDesktop( {deleteCompleted} ) {
  return (
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
  )
}