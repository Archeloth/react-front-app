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

        if(this.state.ingredients != "" || this.state.name != "" || this.state.owner != ""){
            this.state.ingredients = this.state.ingredients.split(',');
        }
        
        /*
        ????????????????????????????????????????
        let a = this.state.ingredients.split(',');
        this.setState({ingredients: a});
        */

        e.preventDefault();

        console.log(this.state);
        
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post("https://public-recepy-api.herokuapp.com/recepts", this.state)
            .then(response => {
                console.log(response);
                this.setState({message: "Update successful"});
            })
            .catch(error => {
                console.log(error);
                this.setState({message: "Error while uploading"});
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
                    <button type="submit" className="upload-submit">Submit</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
   
}

export default Upload;