import React from 'react'
import PropTypes from 'prop-types'
import styles from './TaskCreatorButton.module.css'

function TaskCreatorButton({ title }) {
  return (
    <input
      type='submit'
      className={styles.submit}
      value={title}
    />
  )
}

TaskCreatorButton.propTypes = {
  title: PropTypes.string.isRequired
}

export default TaskCreatorButton