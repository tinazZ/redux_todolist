import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, FETCH_REQUEST, FETCH_SUCCESS } from '../action/actions';


const initialTodoList = [
    { text: 1, completed: true },
    { text: 2, completed: false }
];

function todoList(state = initialTodoList, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((item, index) => {
                if (index == action.index) {
                    item.completed = !item.completed
                }
                return item;
            })
        default:
            return state;
    }
}


const initialFilter = [{
    name: 'All',
    active: true
}, {
    name: 'Completed',
    active: false
}, {
    name: 'Active',
    active: false
}];

function filterList(state = initialFilter, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return state.map((item, index) => {
                item.active = false
                if (item.name == action.filter) {
                    item.active = true
                }
                return item;
            })
        default:
            return state;
    }
}



function fetchList(state = {}, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.data
        default:
            return state;
    }
}

function fetchFlag(state = false, action) {
    switch (action.type) {
        case FETCH_REQUEST:
            return true;
        default:
            return state;
    }
}

const reducers = combineReducers({
    todoList,
    filterList,
    fetchList,
    fetchFlag
})

export default reducers;