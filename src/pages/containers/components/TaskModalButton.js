import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskModalButton.module.css'

function TaskModalButton(props) {
  return (
    <button
      className={styles.button}
      onClick={props.clicked}
    >
      {props.icon}
    </button>
  )
}

TaskModalButton.propTypes = {
  icon: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
}

export default TaskModalButton