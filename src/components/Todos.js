import React, { Component } from 'react';
import UnCompletedTodoListItem from './UnCompletedTodoListItem';
import CompletedTodoListItem from './CompletedTodoListItem';

class Todos extends React.Component {
    static ulClass = 'list';

    render() {
        const props = this.props;
        const texts = props.texts;
        const litemsItems = texts.map((text, index) => {
            const liProps = {text: text.desc, key: index.toString(), onClick: props.onClick, onRemove: props.onRemove}
            if(props.isCompleted) {
                return <CompletedTodoListItem {...liProps} />
            }

            return <UnCompletedTodoListItem {...liProps} />
        });
        return (
                <ul className={props.ulClass} id={props.id}>
                    {litemsItems}
                </ul>
            )
    }
}


Todos.defaultProps = {
    ulClass: 'ui-state-default',
    id: ''
}

export default Todos;