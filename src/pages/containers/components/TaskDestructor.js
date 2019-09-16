import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskDestructor.module.css'

function TaskDestructor(props) {
  return (
    <button
      className={styles.button}
      onClick={props.clicked}
    >
      {props.icon}
    </button>
  )
}

TaskDestructor.propTypes = {
  icon: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
}

export default TaskDestructor