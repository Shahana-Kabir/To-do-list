import React, {Component} from 'react';
import './ToDo.css';

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state ={
            isEditing: false,
            editedTitle:this.props.task
        } 
    };

    toggleForm = ()=>{
        this.setState({isEditing:!this.state.isEditing})
    }

    handleUpdate = (e)=>{
        e.preventDefault();
        this.props.updateList(this.props.id, this.state.editedTitle)
        this.setState({...this.state, isEditing: false})
    }
    
    handleChange = (evnt)=>{
        evnt.preventDefault();
        this.setState({editedTitle: evnt.target.value})

    }
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit = {this.handleUpdate}>
                        <input type = "text" value = {this.state.editedTitle} onChange = {this.handleChange}/>
                        <button>
                            Save
                        </button>
                    </form>
                </div>
            )
        }
        else {result = (
            <div>
                <ul className = "tasks">
                <li className = "task__button">
                    {this.props.task}
                    </li>
                    
                    <li className = "task__button">
                        <button onClick = {this.toggleForm}>
                            Edit
                        </button>
                    </li>
                    <li className = "task__button">
                    <button onClick = {this.props.removeTask}>
                            Delete
                        </button>
                    </li>
                    </ul>
                
            </div>

        )

        }
        return result;
    }
}

export default ToDo;