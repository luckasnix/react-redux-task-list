import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Actions from '../../store/actions/todoActions'

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
        <li style={props.done ? styles.lineThrough : null}>
            {props.name}
            <button onClick={clickHandler}>Mudar status de tarefa</button>
        </li>
    )
}

const styles = {
    lineThrough : {
        textDecoration : 'line-through'
    }
}
export default TodoItem