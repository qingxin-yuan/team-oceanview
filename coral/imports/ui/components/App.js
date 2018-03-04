import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      value: ""
    }
    // this.locationInput = undefined
  }
  render(){
    return(
      <form
      onSubmit={
        (e) =>{
          e.prevenDefault();
          
        }

      }>
      <label>
        City: 
      <input 
        className = "locationInput"
        type="text"
        value={this.state.value}
        onChange = {(e)=>this.setState({value: e.target.value})}
        // ref={input => this.locationInput = input }
      />
      </label>
      <input type="submit" value="Submit" />
      </form>
    )
  }
}