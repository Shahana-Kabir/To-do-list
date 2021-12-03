import React, { Component } from 'react';
import ToDo from './ToDo';
import './List.css';
import NewListForm from './NewListForm';
const uuid = require('uuid').v4;

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [{id: '1', title: "Go for a walk" }, {id: '2', title: "Love your children" }] }
    }

    create = (newList) => {
        let newToDo = { title: newList, id: uuid() }
        let newArray = [...this.state.list, newToDo]

        this.setState({ list: newArray })

    }

    update = (id, updatedTask) => {

        // this.setState({ list: [] });

        const updatedTodos = this.state.list.map(todo => {
            if (todo.id === id) {
                return {...todo, title: updatedTask }
            }
            else { return todo };
        })

        

        console.log(updatedTodos);

        this.setState({ list: updatedTodos });

        console.log(this.state.list);

    }
    remove = (id) => {
        this.setState({ list: this.state.list.filter(li => li.id !== id) })

    }

    render() {

        return (
            <div>
                <h1>
                    ToDoList
                </h1>
                {this.state.list.map(ti => <ToDo
                    task={ti.title}
                    id={ti.id}
                    removeTask={() => this.remove(ti.id)}
                    updateList={(id, updatedTask) => this.update(id, updatedTask)}
                    key ={ti.id}
                />)}
                <NewListForm addNewToDo={this.create} />



            </div>
        )
    }
}

export default ToDoList;