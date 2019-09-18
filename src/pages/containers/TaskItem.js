import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import TaskCheckbox from './components/TaskCheckbox'
import TaskItemButton from './components/TaskItemButton'
import { ReactComponent as RenameIcon } from '../../assets/images/rename_icon.svg'
import { ReactComponent as CloseIcon } from '../../assets/images/close_icon.svg'
import * as Actions from '../../store/reducers/actions/taskActions'
import styles from './TaskItem.module.css'

function TaskItem({ id, name, completed, opened }) {
  const [isChecked, setChecked] = useState(completed)
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
      updateTaskStatus(id, isChecked)
    },
    [updateTaskStatus, id, isChecked]
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
    <li className={[styles.item, completed ? styles.completed : null].join(' ')}>
      <p>{name}</p>
      <div className={styles.controlButtons}>
        <TaskItemButton icon={<RenameIcon/>} clicked={opened}/>
        <TaskCheckbox checked={isChecked} changed={handleChecked}/>
        <TaskItemButton icon={<CloseIcon/>} clicked={() => { handleTaskDeleted(id) }}/>
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