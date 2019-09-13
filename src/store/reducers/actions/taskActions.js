import * as Types from './types/taskTypes'

export function addTask(name) {
  return {
    type: Types.ADD_TASK,
    name: name
  }
}
export function toggleTask(id, completed) {
  return {
    type: Types.TOGGLE_TASK,
    id: id,
    completed: completed
  }
}