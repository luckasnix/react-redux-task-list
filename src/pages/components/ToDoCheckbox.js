import React from 'react'
import styles from './ToDoCheckbox.module.css'

function ToDoCheckbox(props) {
  return (
    <input
      className={styles.checkbox}
      type='checkbox'
      checked={props.checked}
      onChange={props.changed}
    />
  )
}

export default ToDoCheckbox