import * as Types from './types/taskTypes'

export function addTask(name) {
  return {
    type: Types.ADD_TASK,
    name: name
  }
}

export function deleteTask(id) {
  return {
    type: Types.DELETE_TASK,
    id: id
  }
}

export function toggleStatus(id, completed) {
  return {
    type: Types.TOGGLE_STATUS,
    id: id,
    completed: completed
  }
}

export function updateName(id, name) {
  return {
    type: Types.UPDATE_NAME,
    id: id,
    name: name
  }
}