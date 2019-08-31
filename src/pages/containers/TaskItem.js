import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import TaskCheckbox from '../components/TaskCheckbox'
import * as Actions from '../../store/actions/taskActions'
import styles from './TaskItem.module.css'

function TaskItem(props) {
  const [isChecked, setChecked] = useState(props.completed)
  const dispatch = useDispatch()
  const toggleTask = useCallback(
    (id, completed) => {
      dispatch(Actions.toggleTask(id, completed))
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
      toggleTask(props.id, isChecked)
    },
    [toggleTask, props.id, isChecked]
  )
  return (
    <li className={[styles.item, props.completed ? styles.completed : null].join(' ')}>
      {props.name}
      <TaskCheckbox checked={isChecked} changed={handleChecked}/>
    </li>
  )
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

export default TaskItem