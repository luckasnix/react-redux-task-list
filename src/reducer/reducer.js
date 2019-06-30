import { ADD_TODO, TOGGLE_TODO } from './actions';

let id = 1;
export function todoReducer(state = [],action) {
    switch (action['type']) {
        case ADD_TODO:
            return state.concat({
                'todoId' : id++,
                'todoName' : action['name'],
                'isDone' : false
            });
        case TOGGLE_TODO:
            return state.map((cur) => {
                if (cur['todoId'] == action['id']) {
                    return {...cur, 'isDone' : !cur['isDone']};
                } else {
                    return cur;
                }
            });
        default:
            return state;
    }
}