import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../reducer/actions';

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
                            },() => {
                                this.props.setFilter(this.state.selectValue);
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

function mapDispatchToProps(dispatch) {
    return {
        setFilter: (filter) => { dispatch(setFilter(filter)) }
    }
}

export default connect(null,mapDispatchToProps)(TodoFilter);