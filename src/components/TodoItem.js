import React from 'react';

function TodoItem(props) {
    return (
        <li style={props.done ? styles.lineThrough : null}>{props.name}</li>
    );
}

const styles = {
    lineThrough : {
        textDecoration : 'line-through'
    }
};

export default TodoItem;