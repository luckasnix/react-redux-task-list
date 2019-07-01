import React from 'react';
import { connect } from 'react-redux';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import { addTodo } from '../reducer/actions';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.createNewTodo = this.createNewTodo.bind(this);
    }
    createNewTodo(name) {
        this.props.addTodo(name);
    }
    render() {
        return (
            <div>
                <CreateTodo create={this.createNewTodo}/>
                <ul>
                    {
                        this.props.todos.map((cur) => {
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
                <TodoFilter/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos : state.todo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (name) => { dispatch(addTodo(name)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);