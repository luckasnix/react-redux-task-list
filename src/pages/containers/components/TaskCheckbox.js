import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskCheckbox.module.css'

function TaskCheckbox(props) {
  return (
    <input
      className={styles.checkbox}
      type='checkbox'
      checked={props.checked}
      onChange={props.changed}
    />
  )
}

TaskCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  changed: PropTypes.func.isRequired
}

export default TaskCheckbox