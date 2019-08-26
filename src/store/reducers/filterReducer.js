import { createReducer } from 'redux-create-reducer'
import * as ActionsTypes from '../actions/filterActionsTypes'

const filterReducer = createReducer(
  'all',
  {
      [ActionsTypes.SET_FILTER]: (_, action) => {
          return action.filter
      }
  }
)

export default filterReducer