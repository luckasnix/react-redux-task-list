import { createReducer } from 'redux-create-reducer'
import * as Types from './actions/types/taskTypes'
import { v4 } from 'uuid'

const initState = []

const taskReducer = createReducer(
  initState,
  {
    [Types.ADD_TASK]: (state, action) => {
      return state.concat(
        {
          taskId: v4(),
          taskName: action.name,
          completed: false
        }
      )
    },
    [Types.TOGGLE_TASK]: (state, action) => {
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