import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/toDoActionsTypes'
import { v4 } from 'uuid'

const toDoReducer = createReducer(
  [],
  {
    [ActionsTypes.ADD_TODO]: (state, action) => {
      return state.concat(
        {
          toDoId: v4(),
          toDoName: action.name,
          isDone: false
        }
      )
    },
    [ActionsTypes.TOGGLE_TODO]: (state, action) => {
      return state.map(
        (cur) => {
          if (cur.toDoId === action.id) {
            return { ...cur, isDone: action.isDone }
          } else {
            return cur
          }
        }
      )
    }
  }
)

export default toDoReducer