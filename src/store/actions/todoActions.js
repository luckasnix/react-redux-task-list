import * as ActionsTypes from './toDoActionsTypes'

export function addToDo(name) {
  return {
    type: ActionsTypes.ADD_TODO,
    name: name
  }
}
export function toggleToDo(id, isDone) {
  return {
    type: ActionsTypes.TOGGLE_TODO,
    id: id,
    isDone: isDone
  }
}