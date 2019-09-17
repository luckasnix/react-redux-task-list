import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import TaskCheckbox from './components/TaskCheckbox'
import TaskItemButton from './components/TaskItemButton'
import { ReactComponent as RenameIcon } from '../../assets/images/rename_icon.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/close_icon.svg'
import * as Actions from '../../store/reducers/actions/taskActions'
import styles from './TaskItem.module.css'

function TaskItem(props) {
  const [isChecked, setChecked] = useState(props.completed)
  const dispatch = useDispatch()
  const updateTaskStatus = useCallback(
    (id, completed) => {
      dispatch(Actions.updateTaskStatus(id, completed))
    },
    [dispatch]
  )
  const handleChecked = useCallback(
    () => {
      setChecked(!isChecked)
    },
    [isChecked, setChecked]
  )
  useEffect(
    () => {
      updateTaskStatus(props.id, isChecked)
    },
    [updateTaskStatus, props.id, isChecked]
  )
  const deleteTask = useCallback(
    (id) => {
      dispatch(Actions.deleteTask(id))
    },
    [dispatch]
  )
  const handleTaskDeleted = useCallback(
    (id) => {
      deleteTask(id)
    },
    [deleteTask]
  )
  return (
    <li className={[styles.item, props.completed ? styles.completed : null].join(' ')}>
      <p>{props.name}</p>
      <div className={styles.controlButtons}>
        <TaskItemButton icon={<RenameIcon/>} clicked={props.opened}/>
        <TaskCheckbox checked={isChecked} changed={handleChecked}/>
        <TaskItemButton icon={<CloseIcon/>} clicked={() => { handleTaskDeleted(props.id) }}/>
      </div>
    </li>
  )
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default TaskItem