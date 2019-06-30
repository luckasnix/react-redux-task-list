import React from 'react';
import { connect } from 'react-redux';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <CreateTodo/>
                <TodoItem/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        'state' : state
    };
}

export default connect(mapStateToProps)(TodoList);