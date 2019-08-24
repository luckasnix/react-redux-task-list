import React from 'react'
import styles from './ToDoCreatorBtn.module.css'

function ToDoCreatorBtn(props) {
  return (
    <button className={styles.btn} onClick={props.onClick}>{props.title}</button>
  )
}

export default ToDoCreatorBtn