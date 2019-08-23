import * as ActionsTypes from './todoActionsTypes'

export function addTodo(name) {
    return {
        type: ActionsTypes.ADD_TODO,
        name: name
    }
}
export function toggleTodo(id) {
    return {
        type: ActionsTypes.TOGGLE_TODO,
        id: id
    }
}