import { createReducer } from 'redux-create-reducer'
import * as Types from './actions/types/filterTypes'

const initState = 'all'

const filterReducer = createReducer(
  initState,
  {
      [Types.SET_FILTER]: (_, action) => {
          return action.filter
      }
  }
)

export default filterReducer