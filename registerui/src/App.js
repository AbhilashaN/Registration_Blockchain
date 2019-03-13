import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {regContract} from './Setup.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      id:"0",
      name:"Organization",
      id1:"0",
      data: ""
    
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleId1Change = this.handleId1Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }
  handleNameChange(event) {
    this.setState({name: event.target.value}, function(){
      console.log(this.state);
    });
  }
  handleIdChange(event) {
    this.setState({id: event.target.value}, function(){
      console.log(this.state);
    });
  }
  handleId1Change(event) {
    this.setState({id1: event.target.value}, function(){
      console.log(this.state);
    });
  }

  handleSubmit(event) {
    // Insert the data
    regContract.setData(this.state.id, this.state.name);
    alert('Submitted!');

  }

  getData(event) {
    var data = regContract.getData(this.state.id1)
    this.setState({
      data: String(data)
    },function(){
       // alert("A name was submitted: " + this.state.data);

    });
    event.preventDefault();
  }


  componentWillMount(){
    
  }
  render() {
    return (
      <div className="App">
        <div id="register">
          <h3>Registration page</h3>
          <label>Name:</label>
          <input type="text" name="Name" value={this.state.name} onChange={this.handleNameChange} />
          <label>ID:</label>
          <input type="number" name="id" value={this.state.id} onChange={this.handleIdChange}  />
        
          <input type="submit" className="button"  value="Register" onClick={this.handleSubmit}/>
        </div>
        <h3>Get data</h3>
        <label>ID</label>
        <input type="number" name="id1" value={this.state.id1} onChange={this.handleId1Change}   />
        <input type="submit" className="button"  value="Retrieve" onClick={this.getData}/>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
