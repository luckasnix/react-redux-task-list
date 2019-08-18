import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../reducer/actions'

function TodoItem(props) {
    return (
        <li style={props.done ? styles.lineThrough : null}>
            {props.name}
            <button onClick={() => { props.toggleTodo(props.id) }}>Mudar status de tarefa</button>
        </li>
    )
}

const styles = {
    lineThrough : {
        textDecoration : 'line-through'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo : (id) => { dispatch(toggleTodo(id)) }
    }
}

export default connect(null,mapDispatchToProps)(TodoItem)