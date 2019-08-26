import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import ToDoInput from '../components/ToDoInput'
import ToDoCreatorBtn from '../components/ToDoCreatorBtn'
import * as Actions from '../../store/actions/toDoActions'
import styles from './ToDoCreator.module.css'

function ToDoCreator() {
  const [toDoName, setToDoName] = useState('')
  const dispatch = useDispatch()
  const addToDo = useCallback(
    (name) => {
      dispatch(Actions.addToDo(name))
    },
    [dispatch]
  )
  const createToDo = useCallback(
    (evt) => {
      evt.preventDefault()
      addToDo(toDoName)
      setToDoName('')
    },
    [toDoName, setToDoName, addToDo]
  )
  const handleInputChange = useCallback(
    (evt) => {
      setToDoName(evt.target.value)
    },
    [setToDoName]
  )
  return (
    <div className={styles.container}>
      <ToDoInput placeholder='Nova tarefa' value={toDoName} changed={handleInputChange}/>
      <ToDoCreatorBtn title='Adicionar tarefa' clicked={createToDo}/>
    </div>
  )
}

export default ToDoCreator