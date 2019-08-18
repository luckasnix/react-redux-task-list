import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

function showTodos(todosList,activeFilter) {
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

function TodoList(props) {
    return (
        <ul>
            {
                showTodos(props.todos,props.filter).map((cur) => {
                    return (
                        <TodoItem
                            key={cur.todoId}
                            id={cur.todoId}
                            name={cur.todoName}
                            done={cur.isDone}
                        />
                    )
                })
            }
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        todos : state.todos,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(TodoList)