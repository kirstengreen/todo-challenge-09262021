import { useState, Fragment } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import AddTodoItem from './components/AddTodoItem/AddTodoItem'
import TodoList from './components/TodoList/TodoList'
import ListFooter from './components/ListFooter/ListFooter'
import EmptyTodoList from './components/EmptyTodoList/EmptyTodoList'

export default function App() {

  const [ todos, setTodos ] = useState([
    {
      id: 1,
      name: 'Cook dinner',
      complete: false
    },
    {
      id: 2,
      name: 'Water plants',
      complete: true
    },
    {
      id: 3,
      name: 'Take out the trash',
      complete: true
    }
  ])


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
          <TodoList todos={todos} deleteTodo={deleteTodo} />
          <ListFooter deleteCompleted={deleteCompleted} />
        </Fragment>
      ) : (
        <EmptyTodoList message='You have no items in your todo list. Create an item to begin tracking your list.'/>
      )}
    </Layout>
  );
}
