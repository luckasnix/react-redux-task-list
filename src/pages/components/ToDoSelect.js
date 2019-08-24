import React from 'react'
import styles from './ToDoSelect.module.css'

function ToDoSelect(props) {
  return (
    <select className={styles.select} value={props.value} onChange={props.onChange}>
        {
          props.data.map(
            (cur) => {
              return <option key={cur.value} value={cur.value}>{cur.title}</option>
            }
          )
        }
    </select>
  )
}

export default ToDoSelect