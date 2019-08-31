import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskCreatorBtn.module.css'

function TaskCreatorBtn(props) {
  return (
    <button className={styles.btn} onClick={props.clicked}>{props.title}</button>
  )
}

TaskCreatorBtn.propTypes = {
  clicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default TaskCreatorBtn