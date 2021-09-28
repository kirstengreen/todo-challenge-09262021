import { useState, useEffect, Fragment } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import AddTodoItem from './components/AddTodoItem/AddTodoItem'
import TodoList from './components/TodoList/TodoList'
import ListFooter from './components/ListFooter/ListFooter'
import EmptyTodoList from './components/EmptyTodoList/EmptyTodoList'

export default function App() {

  const mobileBreakpoint = 960;
  const [ viewportWidth, setViewportWidth ] = useState(window.innerWidth)
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      name: 'Cook dinner',
      complete: false
    },
    {
      id: 2,
      name: 'Water plants',
      complete: false
    },
    {
      id: 3,
      name: 'Take out the trash',
      complete: false
    }
  ])


  // LISTEN FOR AND UPDATE VIEWPORT SIZE CHANGE
  useEffect( () => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateViewportWidth)
    return () => window.removeEventListener('resize', updateViewportWidth)
  })


  // TOGGLE FOR COMPLETION STATUS
  const toggleComplete = (id) => {
    setTodos( todos.map( (todo) => 
      todo.id === id ? {
        ...todo, complete: !todo.complete
      } : todo
    ))
  }


  // DELETE TODO
  const deleteTodo = (id) => {
    setTodos(todos.filter( (todo) => 
      todo.id !== id 
    ))
  }


  // DELETE COMPLETED
  const deleteCompleted = () => {
    setTodos(todos.filter( (todo) => 
      todo.complete !== true
    ))
  }


  return (
    <Layout>
      <Header headerText='ToDo' />
      <AddTodoItem placeholderText='Create a new item...' />
      { todos.length > 0 ? (
        <Fragment>
          <TodoList 
            todos={todos} 
            deleteTodo={deleteTodo} 
            toggleComplete={toggleComplete}/>
          <ListFooter 
            deleteCompleted={deleteCompleted} 
            viewportWidth={viewportWidth}
            mobileBreakpoint={mobileBreakpoint}/>
        </Fragment>
      ) : (
        <EmptyTodoList message='You have no items in your todo list. Create an item to begin tracking your list.'/>
      )}
    </Layout>
  );
}
