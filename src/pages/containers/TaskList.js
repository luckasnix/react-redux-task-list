import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'
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
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          showFilteredList(tasks, filter).map(
            (cur) => {
              return (
                <TaskItem
                  key={cur.taskId}
                  id={cur.taskId}
                  name={cur.taskName}
                  completed={cur.completed}
                />
              )
            }
          )
        }
      </ul>
    </div>
  )
}

export default TaskList