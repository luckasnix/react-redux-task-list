import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from '../components/ToDoItem'
import styles from './ToDoList.module.css'

function showToDoList(list, filter) {
    switch (filter) {
        case 'all':
            return list
        case 'undone':
            return list.filter(
                (cur) => {
                    return cur.isDone === false
                }
            )
        case 'done':
            return list.filter(
                (cur) => {
                    return cur.isDone === true
                }
            )
        default:
            return list
    }
}

function ToDoList() {
    const toDoList = useSelector(
        (state) => {
            return state.toDoList
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
                    showToDoList(toDoList, filter).map(
                        (cur) => {
                            return (
                                <ToDoItem
                                    key={cur.toDoId}
                                    id={cur.toDoId}
                                    name={cur.toDoName}
                                    done={cur.isDone}
                                />
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default ToDoList