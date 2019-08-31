import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TaskInput from '../components/TaskInput'
import TaskCreatorBtn from '../components/TaskCreatorBtn'
import * as Actions from '../../store/actions/taskActions'
import styles from './TaskCreator.module.css'

function TaskCreator() {
  const [taskName, setTaskName] = useState('')
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
      addTask(taskName)
      setTaskName('')
    },
    [taskName, setTaskName, addTask]
  )
  const handleInputChange = useCallback(
    (evt) => {
      setTaskName(evt.target.value)
    },
    [setTaskName]
  )
  return (
    <div className={styles.container}>
      <TaskInput placeholder='Nova tarefa' value={taskName} changed={handleInputChange}/>
      <TaskCreatorBtn title='Adicionar tarefa' clicked={createTask}/>
    </div>
  )
}

export default TaskCreator