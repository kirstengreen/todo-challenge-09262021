import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddTodoItem from './components/AddTodoItem/AddTodoItem'
import TodoList from './components/TodoList/TodoList'
import ListFooter from './components/ListFooter/ListFooter'

export default function App() {

  const [ todos, setTodos ] = useState([
    {
      id: 1,
      name: 'Cook dinner'
    },
    {
      id: 2,
      name: 'Water plants'
    }
  ])

  return (
    <div>
      <Header headerText='ToDo' />
      <AddTodoItem placeholderText='Create a new item...' />
      <TodoList todos={todos} />
      <ListFooter />
    </div>
  );
}
