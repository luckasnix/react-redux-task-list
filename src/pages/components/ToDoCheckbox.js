import React from 'react'
import PropTypes from 'prop-types'
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

ToDoCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  changed: PropTypes.func.isRequired
}

export default ToDoCheckbox