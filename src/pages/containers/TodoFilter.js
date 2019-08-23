import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as Actions from '../../store/actions/filterActions'

function TodoFilter() {
    const [selectValue, setSelectValue] = useState('all')
    const dispatch = useDispatch()
    const setFilter = useCallback(
        (filter) => {
            dispatch(Actions.setFilter(filter))
        },
        [dispatch]
    )
    const changeTextHandler = useCallback(
        (evt) => {
            setSelectValue(evt.target.value)
        },
        [setSelectValue]
    )
    useEffect(
        () => {
            setFilter(selectValue)
        }
    )
    return (
        <form>
            <select value={selectValue} onChange={changeTextHandler}>
                <option value='all'>Todas as tarefas</option>
                <option value='undone'>Tarefas a se fazer</option>
                <option value='done'>Tarefas realizadas</option>
            </select>
        </form>
    )
}

export default TodoFilter