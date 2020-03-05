import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: [],
            owner: '',
            message: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();

        if(this.state.ingredients !== "" || this.state.name !== ""){
            this.setState({ ingredients: this.state.ingredients.split(',')});
        }

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post("https://public-recepy-api.herokuapp.com/recepts", this.state)
            .then(response => {
                this.setState({message: "Update successful"});
            })
            .catch(error => {
                this.setState({message: "Error while uploading"});
                throw error
            })
    }

   
    render(){
        const {name, ingredients, owner} = this.state;
        return(
            <div>
                <h3>Upload form</h3>
                <p><b>Tips: </b>Separate the different ingredients with commas ( , )</p>
                <form onSubmit={this.submitHandler} className="upload-form">
                    <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Name" />
                    <input type="text" name="ingredients" value={ingredients} onChange={this.changeHandler} placeholder="Ingredients" />
                    <input type="text" name="owner" value={owner} onChange={this.changeHandler} placeholder="Owner" />
                    <button type="submit" className="btn">Submit</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
   
}

export default Upload;