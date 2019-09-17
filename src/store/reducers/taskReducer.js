import { createReducer } from 'redux-create-reducer'
import * as Types from './actions/types/taskTypes'
import { v4 } from 'uuid'

const initState = []

const taskReducer = createReducer(
  initState,
  {
    [Types.CREATE_TASK]: (state, action) => {
      return state.concat(
        {
          id: v4(),
          name: action.name,
          completed: false
        }
      )
    },
    [Types.UPDATE_TASK_STATUS]: (state, action) => {
      return state.map(
        (cur) => {
          if(cur.id === action.id) {
            return { ...cur, completed: action.completed }
          } else {
            return cur
          }
        }
      )
    },
    [Types.UPDATE_TASK_NAME]: (state, action) => {
      return state.map(
        (cur) => {
          if(cur.id === action.id) {
            return { ...cur, name: action.name }
          } else {
            return cur
          }
        }
      )
    },
    [Types.DELETE_TASK]: (state, action) => {
      return state.filter(
        (cur) => {
          return cur.id !== action.id
        }
      )
    }
  }
)

export default taskReducer