//react库
import React, { Component } from 'react';
//react-redux
import { connect } from 'react-redux';
//action creator
import { addTodo, toggleTodo, setVisibilityFilter } from '../action/actions';


//components
import AddTodo from '../components/addtodo/addtodo';
import TodoList from '../components/todolist/todolist';
import Filter from '../components/filter/filter';


class Todo extends Component {
    render() {
        return (
            <div>
                <AddTodo addTodo={this.props.addTodo} onFilterChange={this.props.onFilterChange} />
                <TodoList todoList={this.props.todoList} toggleTodo={this.props.toggleTodo} />
                <Filter filter={this.props.filter} onFilterChange={this.props.onFilterChange} />
            </div>
        )
    }
}

/**
 * 筛选todolist
 * @param {array} todoList 
 * @param {string} filter 
 */
function getVisibleTodos(todoList, filterList) {
    var filterList = filterList;
    var selectedFilter = "";
    for (let i = 0; i < filterList.length; i++) {
        if (filterList[i].active) {
            selectedFilter = filterList[i].name;
            break;
        }
    }

    switch (selectedFilter) {
        case 'All':
            return todoList;
        case 'Completed':
            return todoList.filter(t => t.completed);
        case 'Active':
            return todoList.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter:' + filter)
    }
}

function mapStateToProps(state) {
    return {
        todoList: getVisibleTodos(state.todoList, state.filterList),
        filter: state.filterList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        toggleTodo: (index) => dispatch(toggleTodo(index)),
        onFilterChange: (filter) => dispatch(setVisibilityFilter(filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)