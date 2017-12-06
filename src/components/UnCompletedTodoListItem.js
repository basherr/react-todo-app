import React, { Component } from 'react';

class UnCompletedTodoListItem extends React.Component {
    static liClass = 'ui-state-default';

    render() {
        return (
            <li className={this.props.liClass}>
                <div className="checkbox">
                    <label><input type="checkbox" value={this.props.text} checked={false} onClick={this.props.onClick} />{this.props.text}</label>
                </div>
            </li>
        )
    }
}

UnCompletedTodoListItem.defaultProps = {
    liClass: 'ui-state-default'
}

export default UnCompletedTodoListItem;