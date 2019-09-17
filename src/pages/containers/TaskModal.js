import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import TaskInput from './components/TaskInput'
import TaskCreatorButton from './components/TaskCreatorButton'
import TaskModalButton from './components/TaskModalButton'
import { ReactComponent as CloseIcon } from '../../assets/images/close_icon.svg'
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
  const updateTaskName = useCallback(
    (id, name) => {
      dispatch(Actions.updateTaskName(id, name))
    },
    [dispatch]
  )
  const handleTaskNameUpdated = useCallback(
    (evt) => {
      evt.preventDefault()
      updateTaskName(props.task, taskName)
      props.closed()
    },
    [updateTaskName, props, taskName]
  )
  return (
    <>
      <div className={styles.blackdrop} onClick={props.closed}/>
      <div className={styles.modal}>
        <form onSubmit={handleTaskNameUpdated}>
          <TaskInput placeholder='Novo nome' value={taskName} changed={handleNameChange}/>
          <TaskCreatorButton title='Atualizar tarefa'/>
        </form>
        <TaskModalButton icon={<CloseIcon/>} clicked={props.closed}/>
      </div>
    </>
  )
}

TaskModal.propTypes = {
  task: PropTypes.string.isRequired,
  closed: PropTypes.func.isRequired
}

export default TaskModal