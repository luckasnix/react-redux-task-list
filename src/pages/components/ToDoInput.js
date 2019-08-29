import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToDoInput.module.css'

function ToDoInput(props) {
  return (
    <input
      className={styles.input}
      type='text'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.changed}
    />
  )
}

ToDoInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}

export default ToDoInput