import React from 'react';

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue :  'all'
        };
    }
    render() {
        return (
            <form>
                <select
                    value={this.state.selectValue}
                    onChange={
                        (evt) => {
                            this.setState({
                                selectValue : evt.target.value
                            });
                        }
                    }
                >
                    <option value='all'>Todas as tarefas</option>
                    <option value='undone'>Tarefas a se fazer</option>
                    <option value='done'>Tarefas realizadas</option>
                </select>
            </form>
        );
    }
}

export default TodoFilter;