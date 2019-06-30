import React from 'react';
import { connect } from 'react-redux';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
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
                        this.props.state.map((cur) => {
                            return (
                                <TodoItem
                                    key={cur.todoId}
                                    name={cur.todoName}
                                    done={cur.isDone}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state : state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (name) => { dispatch(addTodo(name)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);