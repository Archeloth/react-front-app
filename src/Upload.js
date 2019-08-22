import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: '',
            owner: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        
        e.preventDefault();

        console.log(this.state);
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post("https://public-recepy-api.herokuapp.com/recepts", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        const {name, ingredients, owner} = this.state;
        return(
            <div>
                <h3>Upload form</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" value={name} onChange={this.changeHandler} placeholder="Name" />
                    <input type="text" name="ingredients" value={ingredients} onChange={this.changeHandler} placeholder="Ingredients" />
                    <input type="text" name="owner" value={owner} onChange={this.changeHandler} placeholder="Owner" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        );
    }
   
}

export default Upload;