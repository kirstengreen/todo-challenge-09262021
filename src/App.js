import './App.css'
import Header from './components/Header/Header'
import AddListItem from './components/AddListItem/AddListItem'
import TodoList from './components/TodoList/TodoList'

 export default function App() {
  return (
    <div>
      <Header headerText='ToDo' />
      <AddListItem placeholderText='Create a new item...' />
      <TodoList listItems="Future list items" />
      {/* List footer component */}
    </div>
  );
}
