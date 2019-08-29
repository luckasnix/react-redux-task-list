import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './ToDoInput.module.css'

function ToDoInput(props) {
  const inputRef = useRef(null)
  useEffect(
    () => {
      console.log(inputRef)
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

ToDoInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}

export default ToDoInput