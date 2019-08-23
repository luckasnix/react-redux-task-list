import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Actions from '../../store/actions/todoActions'

function CreateTodo() {
    const [todoName, setTodoName] = useState('')
    const dispatch = useDispatch()
    const addTodo = useCallback((name) => {
            dispatch(Actions.addTodo(name))
        },
        [dispatch]
    )
    const submitForm = useCallback(
        (evt) => {
            evt.preventDefault()
            addTodo(todoName)
            setTodoName('')
        },
        [todoName, setTodoName, addTodo]
    )
    const handleChange = useCallback(
        (evt) => {
            setTodoName(evt.target.value)
        },
        []
    )
    return (
        <form onSubmit={submitForm}>
            <input
                type='text'
                placeholder='Nova tarefa'
                value={todoName}
                onChange={handleChange}
            />
            <button type='submit'>Adicionar tarefa</button>
        </form>
    )
}

export default CreateTodo