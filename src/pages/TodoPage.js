import React from 'react'
import CreateTodo from './containers/CreateTodo'
import TodoList from './containers/TodoList'
import TodoFilter from './containers/TodoFilter'

function TodoPage() {
    return (
        <div>
            <CreateTodo/>
            <TodoList/>
            <TodoFilter/>
        </div>
    )
}

export default TodoPage