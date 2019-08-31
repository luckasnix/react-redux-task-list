import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers(
  {
    tasks: taskReducer,
    filter: filterReducer
  }
)

export default rootReducer