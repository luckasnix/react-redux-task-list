import * as Types from './types/filterTypes'

export function setFilter(filter) {
  return {
      type: Types.SET_FILTER,
      filter: filter
  }
}