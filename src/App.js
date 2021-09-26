import './App.css'
import Header from './components/Header/Header'
import AddListItem from './components/AddListItem/AddListItem'

 export default function App() {
  return (
    <div>
      <Header headerText='ToDo' />
      <AddListItem placeholderText='Create a new item...' />
      {/* List component */}
      {/* List footer component */}
    </div>
  );
}
