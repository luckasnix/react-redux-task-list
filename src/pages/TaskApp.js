import React from 'react'
import TaskCreator from './containers/TaskCreator'
import TaskList from './containers/TaskList'
import TaskFilter from './containers/TaskFilter'

function TaskApp() {
  return (
    <>
      <TaskCreator/>
      <TaskList/>
      <TaskFilter/>
    </>
  )
}

export default TaskApp