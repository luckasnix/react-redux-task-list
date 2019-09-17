import * as Types from './types/taskTypes'

export function createTask(name) {
  return {
    type: Types.CREATE_TASK,
    name: name
  }
}

export function updateTaskStatus(id, completed) {
  return {
    type: Types.UPDATE_TASK_STATUS,
    id: id,
    completed: completed
  }
}

export function updateTaskName(id, name) {
  return {
    type: Types.UPDATE_TASK_NAME,
    id: id,
    name: name
  }
}

export function deleteTask(id) {
  return {
    type: Types.DELETE_TASK,
    id: id
  }
}