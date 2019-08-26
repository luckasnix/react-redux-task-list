import React from 'react'
import styles from './ToDoCreatorBtn.module.css'

function ToDoCreatorBtn(props) {
  return (
    <button className={styles.btn} onClick={props.clicked}>{props.title}</button>
  )
}

export default ToDoCreatorBtn