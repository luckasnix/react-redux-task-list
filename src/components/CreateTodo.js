import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../reducer/actions'

class CreateTodo extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            todoName :  ''
        }
    }
    handleChange(evt) {
        this.setState({
            todoName : evt.target.value
        })
    }
    render() {
        return (
            <form 
                onSubmit={
                    (evt) => {
                        evt.preventDefault()
                        this.props.addTodo(this.state.todoName)
                        this.setState({
                            todoName : ''
                        })
                    }
                }
            >
                <input
                    type='text'
                    placeholder='Nova tarefa'
                    value={this.state.todoName}
                    onChange={this.handleChange}
                />
                <button type='submit'>
                    Adicionar tarefa
                </button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (name) => { dispatch(addTodo(name)) }
    }
}

export default connect(null,mapDispatchToProps)(CreateTodo)