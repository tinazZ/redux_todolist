/**
 * action 常量
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
//test


/**
 * action creator
 */

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

/**
 * async action
 */
export const asyncAction = text => (dispatch, getState) => {
    if (getState().todoList.length < 5) {
        dispatch(addTodo(text));
    } else {
        console.log('asyncAction', getState());
    }
}