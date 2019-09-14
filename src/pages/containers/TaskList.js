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
  const [currentTask, setCurrentTask] = useState(null)
  const handleNameChanged = useCallback(
    (id) => {
      setCurrentTask(id)
      setModalVisibility(true)
    },
    [setCurrentTask]
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
                  clicked={() => { handleNameChanged(cur.id) }}
                />
              )
            }
          )
        }
      </ul>
      {modalVisibility && <TaskModal task={currentTask} closed={handleClosed}/>}
    </div>
  )
}

export default TaskList