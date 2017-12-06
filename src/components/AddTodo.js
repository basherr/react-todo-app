import React, { Component } from 'react';

class AddTodo extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit} >
                    <h1>Todos</h1>
                    <input type="text" value={this.props.todoText} className="form-control add-todo" placeholder="Add todo" 
                        onChange={this.props.onChange} />
                    <span className="glyphicon glyphicon-plus" onClick={this.handleClick}></span>
                    <input type="submit" className="hidden" ref="submitButton"/>
                </form>
            </div>
        )
    }

    handleClick = () => {
        this.refs.submitButton.click();
    }
}

export default AddTodo;