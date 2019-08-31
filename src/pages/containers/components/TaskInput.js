import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './TaskInput.module.css'

function TaskInput(props) {
  const inputRef = useRef(null)
  useEffect(
    () => {
      inputRef.current.focus()
    },
    []
  )
  return (
    <input
      className={styles.input}
      ref={inputRef}
      type='text'
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.changed}
    />
  )
}

TaskInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}

export default TaskInput