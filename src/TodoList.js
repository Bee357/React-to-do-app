import React, { Component } from 'react';
import Todo from './Todo';
import './todoList.css';
import NewTodo from './NewTodo';

class TodoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <NewTodo addTodo={this.addTodo} />
                {this.renderItems()}
            </div>
        );
    }

    renderItems() {
        return this.state.items.map(description => (
            <Todo key={description} description={description} />
        ));
    }

    constructor(props) {
        super(props);
        this.state = { items: ['Item #1', 'Item #2', 'Item #3'] };
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(item) {
        this.setState({ items: [...this.state.item, item, item] });
    }
}



export default TodoList;