import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../components/TodoItem'

function showTodos(todosList, activeFilter) {
    switch (activeFilter) {
        case 'all':
            return todosList
        case 'undone':
            return todosList.filter(
                (cur) => {
                    return cur.isDone === false
                }
            )
        case 'done':
            return todosList.filter(
                (cur) => {
                    return cur.isDone === true
                }
            )
        default:
            return todosList
    }
}

function TodoList() {
    const todos = useSelector(
        (state) => {
            return state.todos
        }
    )
    const filter = useSelector(
        (state) => {
            return state.filter
        }
    )
    return (
        <ul>
            {
                showTodos(todos, filter).map(
                    (cur) => {
                        return (
                            <TodoItem
                                key={cur.todoId}
                                id={cur.todoId}
                                name={cur.todoName}
                                done={cur.isDone}
                            />
                        )
                    }
                )
            }
        </ul>
    )
}

export default TodoList