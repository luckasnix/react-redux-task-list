import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Actions from '../../store/actions/todoActions'
import styles from './TodoItem.module.css'

function TodoItem(props) {
    const dispatch = useDispatch()
    const toggleTodo = useCallback(
        (id) => {
            dispatch(Actions.toggleTodo(id))
        },
        [dispatch]
    )
    const clickHandler = useCallback(
        () => {
            toggleTodo(props.id)
        },
        [toggleTodo, props.id]
    )
    return (
        <li className={props.done ? styles.done : null}>
            {props.name}
            <button onClick={clickHandler}>Mudar status de tarefa</button>
        </li>
    )
}

export default TodoItem