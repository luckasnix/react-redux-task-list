import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actions';
import { v4 } from 'uuid';

const todoReducer = createReducer([],{
    [ADD_TODO] : (state,action) => {
            return state.concat({
                todoId : v4(),
                todoName : action.name,
                isDone : false
            });
        },
    [TOGGLE_TODO] : (state,action) => {
            return state.map((cur) => {
                if (cur.todoId === action.id) {
                    return {...cur, isDone : !cur.isDone};
                } else {
                    return cur;
                }
            });
        }
});

const filterReducer = createReducer('all',{
    [SET_FILTER] : (_,action) => {
            return action.filter;
        }
});

const rootReducer = combineReducers({
    todos : todoReducer,
    filter : filterReducer
});

export default rootReducer;