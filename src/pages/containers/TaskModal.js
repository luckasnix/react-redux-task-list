import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TaskInput from './components/TaskInput'
import TaskCreatorButton from './components/TaskCreatorButton'
import * as Actions from '../../store/reducers/actions/taskActions'
import styles from './TaskModal.module.css'

function TaskModal(props) {
  const [taskName, setTaskName] = useState('')
  const handleNameChange = useCallback(
    (evt) => {
      setTaskName(evt.target.value)
    },
    [setTaskName]
  )
  const dispatch = useDispatch()
  const updateName = useCallback(
    (id, name) => {
      dispatch(Actions.updateName(id, name))
    },
    [dispatch]
  )
  const updateTaskName = useCallback(
    (evt) => {
      evt.preventDefault()
      updateName(props.task, taskName)
      props.closed()
    },
    [updateName, props, taskName]
  )
  return (
    <>
      <div className={styles.blackdrop} onClick={props.closed}/>
      <div className={styles.modal}>
        <form onSubmit={updateTaskName}>
          <TaskInput placeholder='Novo nome' value={taskName} changed={handleNameChange}/>
          <TaskCreatorButton title='Atualizar tarefa'/>
        </form>
        <button className={styles.closedButton} onClick={props.closed}>X</button>
      </div>
    </>
  )
}

export default TaskModal