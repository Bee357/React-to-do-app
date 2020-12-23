import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        return (
            <div className={this.cssClasses()}>
                {this.state.description}
                <br />
                <button onClick={this.markAsDone}>Mark as Done</button>
            </div>
        );
    };

    constructor(props) {
        super(props);
        this.markAsDone = this.markAsDone.bind(this);
        this.state = {
            description: props.description,
            done: false,

        };
    }

    markAsDone() {
        this.setState({ done: true })
    }

    cssClasses() {
        let classes = ['Todo'];
        if (this.state.done) {
            classes = [...classes, 'Done'];
        }
        return classes.join(' ');
    }

};



export default Todo;
