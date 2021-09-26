import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddListItem from './components/AddListItem/AddListItem'
import TodoList from './components/TodoList/TodoList'
import ListFooter from './components/ListFooter/ListFooter'

export default function App() {

  const [ todos, setTodos ] = useState([
    {
      name: 'Cook dinner'
    },
    {
      name: 'Water plants'
    }
  ])

  return (
    <div>
      <Header headerText='ToDo' />
      <AddListItem placeholderText='Create a new item...' />
      <TodoList todos={todos} />
      <ListFooter />
    </div>
  );
}
