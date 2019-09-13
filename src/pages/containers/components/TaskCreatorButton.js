import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskCreatorButton.module.css'

function TaskCreatorButton(props) {
  return (
    <input
      type='submit'
      className={styles.submit}
      value={props.title}
    />
  )
}

TaskCreatorButton.propTypes = {
  title: PropTypes.string.isRequired
}

export default TaskCreatorButton