//react库
import React, { Component } from 'react';
import './addtodo.css';

export default class AddTodo extends Component {

    handleClick = (e) => {
        var text = this.refs.myinput.value.trim() || '';
        // this.props.addTodo(text);
        this.props.asyncAction(text);
        this.refs.myinput.value = '';
        // this.props.onFilterChange('All');
    }

    render() {
        return (
            <div>
                <input type="text" ref="myinput"/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}