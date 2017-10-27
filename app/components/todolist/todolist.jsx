//react库
import React, { Component } from 'react';
import style from './todolist.css';

export default class TodoList extends Component {

    render() {
        const todoList = this.props.todoList;
        return (
            <ul>
                {todoList.map((todo, index) => {
                    if (todo) {
                        return (
                            <li className={todo.completed ? style.completed : ''}
                                key={index}
                                onClick={() => this.props.toggleTodo(todo.id)}
                            >{todo.text}</li>
                        )
                    }
                })}
            </ul>
        )
    }
}