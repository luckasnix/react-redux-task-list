import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TaskSelect from './components/TaskSelect'
import * as Actions from '../../store/actions/filterActions'
import styles from './TaskFilter.module.css'

function TaskFilter() {
  const [selectValue, setSelectValue] = useState('all')
  const handleOptionChange = useCallback(
    (evt) => {
      setSelectValue(evt.target.value)
    },
    [setSelectValue]
  )
  const dispatch = useDispatch()
  const setFilter = useCallback(
    (filter) => {
      dispatch(Actions.setFilter(filter))
    },
    [dispatch]
  )
  useEffect(
    () => {
      setFilter(selectValue)
    },
    [setFilter, selectValue]
  )
  return (
    <div className={styles.container}>
      <TaskSelect
        value={selectValue}
        changed={handleOptionChange}
        data={
          [
            { value: 'all', title: 'Todas as tarefas' },
            { value: 'active', title: 'Tarefas a se fazer' },
            { value: 'completed', title: 'Tarefas realizadas' }
          ]
        }
      />
    </div>
  )
}

export default TaskFilter