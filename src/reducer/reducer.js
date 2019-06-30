import { ADD_TODO, TOGGLE_TODO } from './actions';
import { v4 } from 'uuid';

export function todoReducer(state = [],action) {
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