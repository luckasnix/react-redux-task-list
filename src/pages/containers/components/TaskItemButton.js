import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskItemButton.module.css'

function TaskItemButton(props) {
  return (
    <button
      className={styles.button}
      onClick={props.clicked}
    >
      {props.icon}
    </button>
  )
}

TaskItemButton.propTypes = {
  icon: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
}

export default TaskItemButton