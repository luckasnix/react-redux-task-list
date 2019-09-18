import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
import TaskModal from './TaskModal'
import styles from './TaskList.module.css'

function showFilteredList(list, filter) {
  switch (filter) {
    case 'all':
      return list
    case 'active':
      return list.filter(
        (cur) => {
          return cur.completed === false
        }
      )
    case 'completed':
      return list.filter(
        (cur) => {
          return cur.completed === true
        }
      )
    default:
      return list
  }
}

function TaskList() {
  const tasks = useSelector(
    (state) => {
      return state.tasks
    }
  )
  const filter = useSelector(
    (state) => {
      return state.filter
    }
  )
  const [modalVisibility, setModalVisibility] = useState(false)
  const [currentTaskId, setCurrentTaskId] = useState(null)
  const [currentTaskName, setCurrentTaskName] = useState(null)
  const handleOpened = useCallback(
    (id, name) => {
      setCurrentTaskId(id)
      setCurrentTaskName(name)
      setModalVisibility(true)
    },
    [setCurrentTaskId, setCurrentTaskName, setModalVisibility]
  )
  const handleClosed = useCallback(
    () => {
      setModalVisibility(false)
    },
    [setModalVisibility]
  )
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          showFilteredList(tasks, filter).map(
            (cur) => {
              return (
                <TaskItem
                  key={cur.id}
                  id={cur.id}
                  name={cur.name}
                  completed={cur.completed}
                  opened={() => { handleOpened(cur.id, cur.name) }}
                />
              )
            }
          )
        }
      </ul>
      {modalVisibility && <TaskModal id={currentTaskId} name={currentTaskName} closed={handleClosed}/>}
    </div>
  )
}

export default TaskList