import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as Actions from '../../store/actions/toDoActions'
import styles from './ToDoItem.module.css'

function ToDoItem(props) {
  const [isChecked, setChecked] = useState(props.isDone)
  const dispatch = useDispatch()
  const toggleToDo = useCallback(
    (id, isDone) => {
      dispatch(Actions.toggleToDo(id, isDone))
    },
    [dispatch]
  )
  const checkedHandler = useCallback(
    () => {
      setChecked(!isChecked)
    },
    [isChecked, setChecked]
  )
  useEffect(
    () => {
      toggleToDo(props.id, isChecked)
    },
    [toggleToDo, props.id, isChecked]
  )
  return (
    <li className={[styles.item, props.isDone ? styles.done : null].join(' ')}>
      {props.name}
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={isChecked}
        onChange={checkedHandler}
      />
    </li>
  )
}

export default ToDoItem