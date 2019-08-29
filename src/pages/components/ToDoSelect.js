import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToDoSelect.module.css'

function ToDoSelect(props) {
  return (
    <select className={styles.select} value={props.value} onChange={props.changed}>
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

ToDoSelect.propTypes = {
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ToDoSelect