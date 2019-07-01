import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

function TodoApp() {
    return (
        <div>
            <CreateTodo/>
            <TodoList/>
            <TodoFilter/>
        </div>
    );
}

export default TodoApp;