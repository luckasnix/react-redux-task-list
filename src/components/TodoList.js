import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <ul>
            {
                props.todos.map((cur) => {
                    return (
                        <TodoItem
                            key={cur.todoId}
                            id={cur.todoId}
                            name={cur.todoName}
                            done={cur.isDone}
                        />
                    );
                })
            }
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps)(TodoList);