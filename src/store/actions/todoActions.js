import * as ActionsTypes from './toDoActionsTypes'

export function addToDo(name) {
    return {
        type: ActionsTypes.ADD_TODO,
        name: name
    }
}
export function toggleToDo(id) {
    return {
        type: ActionsTypes.TOGGLE_TODO,
        id: id
    }
}