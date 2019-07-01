import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actions';
import { v4 } from 'uuid';

function todoReducer(state = [],action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                todoId : v4(),
                todoName : action.name,
                isDone : false
            });
        case TOGGLE_TODO:
            return state.map((cur) => {
                if (cur.todoId === action.id) {
                    return {...cur, isDone : !cur.isDone};
                } else {
                    return cur;
                }
            });
        default:
            return state;
    }
}

function filterReducer(state = 'all',action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todos : todoReducer,
    filter : filterReducer
});

export default rootReducer;