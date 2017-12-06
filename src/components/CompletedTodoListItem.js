import React, { Component } from 'react';

class CompletedTodoListItem extends React.Component {
    static liClass = 'ui-state-default';

    render() {
        return (
            <li className={this.props.liClass}> {this.props.text}
                <div className="completed-todos checkbox-inline">
                    <button className="remove-item btn btn-default btn-xs pull-right" 
                        data-todo={this.props.text} onClick={this.props.onRemove}>
                        <span className="glyphicon glyphicon-remove cursor"></span>
                    </button>
                </div>
            </li>
        )
    }
}

CompletedTodoListItem.defaultProps = {
    liClass: 'ui-state-default'
}

export default CompletedTodoListItem;