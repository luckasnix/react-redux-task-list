import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/todoActionsTypes'
import { v4 } from 'uuid'

const todoReducer = createReducer(
    [],
    {
        [ActionsTypes.ADD_TODO] : (state,action) => {
            return state.concat(
                {
                    todoId : v4(),
                    todoName : action.name,
                    isDone : false
                }
            )
        },
        [ActionsTypes.TOGGLE_TODO] : (state,action) => {
            return state.map(
                (cur) => {
                    if (cur.todoId === action.id) {
                        return {...cur, isDone : !cur.isDone}
                    } else {
                        return cur
                    }
                }
            )
        }
    }
)

export default todoReducer