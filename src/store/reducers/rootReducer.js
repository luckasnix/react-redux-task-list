import { combineReducers } from 'redux'
import toDoReducer from './toDoReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  toDoList: toDoReducer,
  filter: filterReducer
})

export default rootReducer