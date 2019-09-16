import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TaskInput from './components/TaskInput'
import TaskCreatorButton from './components/TaskCreatorButton'
import * as Actions from '../../store/reducers/actions/taskActions'
import styles from './TaskCreator.module.css'

function TaskCreator() {
  const [taskName, setTaskName] = useState('')
  const handleNameChange = useCallback(
    (evt) => {
      setTaskName(evt.target.value)
    },
    [setTaskName]
  )
  const dispatch = useDispatch()
  const addTask = useCallback(
    (name) => {
      dispatch(Actions.addTask(name))
    },
    [dispatch]
  )
  const createTask = useCallback(
    (evt) => {
      evt.preventDefault()
      if(taskName !== '') {
        addTask(taskName)
        setTaskName('')
      }
    },
    [taskName, setTaskName, addTask]
  )
  return (
    <div className={styles.container}>
      <form onSubmit={createTask}>
        <TaskInput placeholder='Nova tarefa' value={taskName} changed={handleNameChange}/>
        <TaskCreatorButton title='Adicionar tarefa'/>
      </form>
    </div>
  )
}

export default TaskCreator