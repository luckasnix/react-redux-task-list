import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskCheckbox.module.css'

function TaskCheckbox({ checked, changed }) {
  return (
    <input
      className={styles.checkbox}
      type='checkbox'
      checked={checked}
      onChange={changed}
    />
  )
}

TaskCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  changed: PropTypes.func.isRequired
}

export default TaskCheckbox