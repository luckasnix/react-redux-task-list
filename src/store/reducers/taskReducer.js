import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/taskActionsTypes'
import { v4 } from 'uuid'

const taskReducer = createReducer(
  [],
  {
    [ActionsTypes.ADD_TASK]: (state, action) => {
      return state.concat(
        {
          taskId: v4(),
          taskName: action.name,
          completed: false
        }
      )
    },
    [ActionsTypes.TOGGLE_TASK]: (state, action) => {
      return state.map(
        (cur) => {
          if (cur.taskId === action.id) {
            return { ...cur, completed: action.completed }
          } else {
            return cur
          }
        }
      )
    }
  }
)

export default taskReducer