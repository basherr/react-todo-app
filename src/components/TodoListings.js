import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoListings extends React.Component {
    
    constructor() {
        super();
        const todos = this.getTodos();
        this.state = {todos: todos, todoText: ''};
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleUnCompleted = this.handleUnCompleted.bind(this);
        this.onCompleteAll = this.onCompleteAll.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    render() {

        const unCompletedTodosProps = {id: 'sortable', ulClass: 'list-unstyled', isCompleted: false, 
                                        onClick: this.handleUnCompleted}
        const completedTodosProps = {id: 'done-items', ulClass: 'list-unstyled', isCompleted: true, 
                                    onClick: this.handleCompleted, onRemove: this.onRemove}
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="todolist not-done">
                                <AddTodo onSubmit={this.onAdd} todoText={this.state.todoText} onChange={this.onChange} />
                                <button id="checkAll" className="btn btn-success" onClick={this.onCompleteAll}>Mark all as done</button>
                                <hr/>
                                <Todos texts={this.unCompletedTodos()} {...unCompletedTodosProps}/>
                                <div className="todo-footer">
                                    { this.unCompletedTodos().length > 0 ? (

                                            <div>
                                                <strong>
                                                    <span className="count-todos">{this.unCompletedTodos().length}</span>
                                                </strong>
                                                &nbsp;Items Left
                                            </div>
                                        ) : (
                                            <strong>
                                                <span className="count-todos">No todos found</span>
                                            </strong>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="todolist">
                                <h1>Already Done</h1>
                                <Todos texts={this.completedTodos()} {...completedTodosProps}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }



    getTodos() {
        return  [
             {desc: 'Take out the trash', completed: false},
             {desc: 'Awesome React', completed: false}, 
             {desc: 'Buy bread', completed: false},
             {desc: 'Teach penguins to fly', completed: false},
             {desc: 'Awesome todo has been completed!', completed: true}
        ];
    }

    completedTodos() {
        return this.state.todos.filter((todo) => todo.completed === true);
    }

    unCompletedTodos() {
        return this.state.todos.filter((todo) => todo.completed === false);
    }

    handleCompleted(e) {
        const value = e.target.value;
        const index = this.state.todos.findIndex((todo) => todo.desc === value && todo.completed === true);
       
        const todos = this.state.todos;
        if(index !== -1) {
            let todo = todos[index];
            todo.completed = false;
            todos.slice(index, 1, todo);
        }
        this.setState({ todos: todos });
    }

    handleUnCompleted(e) {
        const value = e.target.value;
        const index = this.state.todos.findIndex((todo) => todo.desc === value && todo.completed === false);
       
        const todos = this.state.todos;
        if(index !== -1) {
            let todo = todos[index];
            todo.completed = true;
            todos.slice(index, 1, todo);
        }
        this.setState({ todos: todos });
    }

    onCompleteAll() {
        const todos = this.state.todos;
        const completedTodos = todos.map((todo) => {
            return {desc: todo.desc, completed: true}
        });
        this.setState({todos: completedTodos});
    }

    onAdd(e) {
        e.preventDefault();
        if(this.state.todoText !== '') {
            const todos = this.state.todos;
            const desc = this.state.todoText;
            todos.splice(0, 0, {desc: desc, completed: false});
            this.setState({
                todoText : ''
            });
        }
        e.target.querySelector('input').focus();
        
    }

    onChange(e) {
        const value = e.target.value;
        this.setState({
            todoText: value
        });
    }

    onRemove(e) {
        const todo = e.currentTarget.getAttribute('data-todo');
        const todos = this.state.todos.filter((td) => td.desc !== todo);
        this.setState({ todos: todos });
    }
}
export default TodoListings;