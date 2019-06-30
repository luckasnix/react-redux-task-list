import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            'todoName' :  ''
        }
    }
    handleChange(evt) {
        this.setState({
            'todoName' : evt.target.value
        });
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state['todoName']} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default CreateTodo;