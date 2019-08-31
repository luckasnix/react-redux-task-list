import * as ActionsTypes from './taskActionsTypes'

export function addTask(name) {
  return {
    type: ActionsTypes.ADD_TASK,
    name: name
  }
}
export function toggleTask(id, completed) {
  return {
    type: ActionsTypes.TOGGLE_TASK,
    id: id,
    completed: completed
  }
}