import * as ActionsTypes from './filterActionsTypes'

export function setFilter(filter) {
  return {
      type: ActionsTypes.SET_FILTER,
      filter: filter
  }
}