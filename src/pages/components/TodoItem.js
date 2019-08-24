import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../store/actions/toDoActions'
import styles from './ToDoItem.module.css'

function ToDoItem(props) {
    const isDone = useSelector(
        (state) => {
            const curToDo = state.toDoList.filter(
                (cur) => {
                    return cur.toDoId === props.id
                }
            )
            return curToDo.isDone
        }
    )
    const [isChecked, setChecked] = useState(isDone)
    const dispatch = useDispatch()
    const toggleToDo = useCallback(
        (id) => {
            dispatch(Actions.toggleToDo(id))
        },
        [dispatch]
    )
    const checkedHandler = useCallback(
        () => {
            setChecked(!isChecked)
            toggleToDo(props.id)
        },
        [isChecked, setChecked, toggleToDo, props.id]
    )
    return (
        <li className={[styles.item, props.done ? styles.done : null].join(' ')}>
            {props.name}
            <input
                className={styles.checkbox}
                type='checkbox'
                checked={isChecked}
                onChange={checkedHandler}
            />
        </li>
    )
}

export default ToDoItem