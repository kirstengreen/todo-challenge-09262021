import './App.css'
import AddListItem from './components/AddListItem/AddListItem'

 export default function App() {
  return (
    <div>
      <h1>ToDo</h1>
      <AddListItem placeholderText='Create a new item...'/>
      {/* List component */}
      {/* List footer component */}
    </div>
  );
}
