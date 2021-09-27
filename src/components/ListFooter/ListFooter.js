import './ListFooter.css'

export default function ListFooter( props ) {

  // Props: checked(for delete checked), notChecked(count not completed)

  return (
    <div className='footer_container'>
      <div className='list_footer_options'>
        <div className="items_left">
          # items left
        </div>
        <div className='list_action'>
          Clear completed
        </div>
      </div>
      <div className='list_footer_filters'>
        <div className='list_action'>All</div>
        <div className='list_action'>Active</div>
        <div className='list_action'>Completed</div>
      </div>
    </div>
  )
}