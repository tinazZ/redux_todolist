//react库
import React, { Component } from 'react';
//react-redux
import { connect } from 'react-redux';
//action creator
import { addTodo, toggleTodo, setVisibilityFilter, fetch_request, fetch_success } from '../action/actions';


//components
import AddTodo from '../components/addtodo/addtodo';
import TodoList from '../components/todolist/todolist';
import Filter from '../components/filter/filter';

/**
 * 筛选todolist
 * @param {array} todoList 
 * @param {string} filter 
 */
const getVisibleTodos = (todoList, filterList) => {
    let selectedFilter = "";
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

const mapStateToProps = state => ({
    todoList: getVisibleTodos(state.todoList, state.filterList),
    filter: state.filterList
});

const mapDispatchToProps = dispatch => ({
    addTodo: (text) => dispatch(addTodo(text)),
    toggleTodo: (index) => dispatch(toggleTodo(index)),
    onFilterChange: (filter) => dispatch(setVisibilityFilter(filter)),
    fetchTest: () => {
        dispatch(fetch_request());//准备发起请求
        fetch('/package.json')
            .then(response => response.json())
            .then(json => dispatch(fetch_success(json)))//拿到请求结果
    }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Todo extends Component {
    render() {
        return (
            <div>
                <AddTodo addTodo={this.props.addTodo} onFilterChange={this.props.onFilterChange} fetchTest={this.props.fetchTest} />
                <TodoList todoList={this.props.todoList} toggleTodo={this.props.toggleTodo} />
                <Filter filter={this.props.filter} onFilterChange={this.props.onFilterChange} />
            </div>
        )
    }
}