import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ToDoSelect from '../components/ToDoSelect'
import * as Actions from '../../store/actions/filterActions'
import styles from './ToDoFilter.module.css'

function ToDoFilter() {
  const [selectValue, setSelectValue] = useState('all')
  const dispatch = useDispatch()
  const setFilter = useCallback(
    (filter) => {
      dispatch(Actions.setFilter(filter))
    },
    [dispatch]
  )
  const handleOptionChange = useCallback(
    (evt) => {
      setSelectValue(evt.target.value)
    },
    [setSelectValue]
  )
  useEffect(
    () => {
      setFilter(selectValue)
    },
    [setFilter, selectValue]
  )
  return (
    <div className={styles.container}>
      <ToDoSelect
        value={selectValue}
        changed={handleOptionChange}
        data={
          [
            { value: 'all', title: 'Todas as tarefas' },
            { value: 'undone', title: 'Tarefas a se fazer' },
            { value: 'done', title: 'Tarefas realizadas' }
          ]
        }
      />
    </div>
  )
}

export default ToDoFilter