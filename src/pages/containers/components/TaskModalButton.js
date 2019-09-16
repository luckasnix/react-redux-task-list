import React from 'react'
import styles from './TaskModalButton.module.css'

function TaskModalButton(props) {
  return (
    <button
      className={styles.button}
      onClick={props.clicked}
    >
      {props.icon}
    </button>
  )
}

export default TaskModalButton