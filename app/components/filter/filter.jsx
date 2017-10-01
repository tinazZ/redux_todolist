//react库
import React, { Component } from 'react';
import style from './filter.css';

export default class Filter extends Component {
    render() {
        const filterList = this.props.filter;

        return (
            <div>
                <h2>Show:</h2>
                {filterList.map((item, index) => {
                    return (
                        <a href="javascript:;"
                            key={index}
                            className={item.active ? style.active : ''}
                            onClick={e => this.props.onFilterChange(item.name)}
                        >{item.name}</a>)
                })}
            </div>
        )
    }
}