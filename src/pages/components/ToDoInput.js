import React from 'react'
import styles from './ToDoInput.module.css'

function ToDoInput(props) {
  return (
    <input
      className={styles.input}
      type='text'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default ToDoInput