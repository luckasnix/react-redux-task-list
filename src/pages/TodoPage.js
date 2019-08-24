import React from 'react'
import ToDoCreator from './containers/ToDoCreator'
import ToDoList from './containers/ToDoList'
import ToDoFilter from './containers/ToDoFilter'

function ToDoPage() {
    return (
        <div>
            <ToDoCreator/>
            <ToDoList/>
            <ToDoFilter/>
        </div>
    )
}

export default ToDoPage