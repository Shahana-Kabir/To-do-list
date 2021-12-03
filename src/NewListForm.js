import React, {Component} from 'react';
const uuid = require('uuid').v4;

class NewListForm extends Component{
    constructor(props){
        super(props);
        this.state = {newItem: ""}
    }

    changeValue = (e)=>{
        this.setState({newItem:e.target.value})
    }
    handleSubmit = (e)=>{
        // const newTitle = {...this.state}
        e.preventDefault();
        this.setState({newItem:""})
        this.props.addNewToDo(this.state.newItem);

    }
    


    render(){
        return(
            <form onSubmit ={this.handleSubmit}>
                <label> NewTAsk:
                <input 
                value = {this.state.newItem}
                onChange = {this.changeValue}
                />
                </label>

                <button> 
                    Add it:
                </button>
                

            </form>
        )
    }
}
export default NewListForm;