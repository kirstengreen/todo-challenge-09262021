import './ListFooter.css'

export default function ListFooter( props ) {

  // Props: checked(for delete checked), notChecked(count not completed)

  return (
    <div>
      <div className="list_footer_options">
        Options
      </div>
      <div className="list_footer_filters">
        Filters
      </div>
    </div>
  )
}