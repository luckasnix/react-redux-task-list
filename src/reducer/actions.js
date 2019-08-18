export const ADD_TODO = 'ADD_TODO'
export function addTodo(name) {
    return {
        type : ADD_TODO,
        name : name
    }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'
export function toggleTodo(id) {
    return {
        type : TOGGLE_TODO,
        id : id
    }
}

export const SET_FILTER = 'SET_FILTER'
export function setFilter(filter) {
    return {
        type : SET_FILTER,
        filter : filter
    }
}