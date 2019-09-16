import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import TaskCheckbox from './components/TaskCheckbox'
import TaskItemButton from './components/TaskItemButton'
import * as Actions from '../../store/reducers/actions/taskActions'
import styles from './TaskItem.module.css'

function TaskItem(props) {
  const [isChecked, setChecked] = useState(props.completed)
  const dispatch = useDispatch()
  const toggleStatus = useCallback(
    (id, completed) => {
      dispatch(Actions.toggleStatus(id, completed))
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
      toggleStatus(props.id, isChecked)
    },
    [toggleStatus, props.id, isChecked]
  )
  const deleteTask = useCallback(
    (id) => {
      dispatch(Actions.deleteTask(id))
    },
    [dispatch]
  )
  const deleteCurrentTask = useCallback(
    (id) => {
      deleteTask(id)
    },
    [deleteTask]
  )
  return (
    <li className={[styles.item, props.completed ? styles.completed : null].join(' ')}>
      <p>{props.name}</p>
      <div className={styles.controlButtons}>
        <TaskItemButton icon='R' clicked={props.opened}/>
        <TaskCheckbox checked={isChecked} changed={handleChecked}/>
        <TaskItemButton icon='X' clicked={() => { deleteCurrentTask(props.id) }}/>
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