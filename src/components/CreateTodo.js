import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            todoName :  ''
        }
    }
    handleChange(evt) {
        this.setState({
            todoName : evt.target.value
        });
    }
    render() {
        return (
            <form 
                onSubmit={
                    (evt) => {
                        evt.preventDefault();
                        this.props.create(this.state.todoName);
                        this.setState({
                            todoName : ''
                        });
                    }
                }
            >
                <input
                    type='text'
                    value={this.state.todoName}
                    onChange={this.handleChange}
                />
                <button type='submit'>
                    Adicionar tarefa
                </button>
            </form>
        );
    }
}

export default CreateTodo;