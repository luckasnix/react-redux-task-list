import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToDoCreatorBtn.module.css'

function ToDoCreatorBtn(props) {
  return (
    <button className={styles.btn} onClick={props.clicked}>{props.title}</button>
  )
}

ToDoCreatorBtn.propTypes = {
  clicked: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default ToDoCreatorBtn