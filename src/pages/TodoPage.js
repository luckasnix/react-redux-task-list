import React from 'react'
import ToDoCreator from './containers/ToDoCreator'
import ToDoList from './containers/ToDoList'
import ToDoFilter from './containers/ToDoFilter'

function ToDoPage() {
  return (
    <>
      <ToDoCreator/>
      <ToDoList/>
      <ToDoFilter/>
    </>
  )
}

export default ToDoPage