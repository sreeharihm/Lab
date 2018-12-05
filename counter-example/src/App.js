import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Add from './component/addButton';
import Sub from './component/subButton';

class App extends Component {
  constructor(){
    super();
    this.addClick1 = this.addClick1.bind(this);
    this.subClick1 = this.subClick1.bind(this);
    this.state={
      counter: 0,
      counter1: 0
    }
  }
  addClick(e){
    this.setState({counter: this.state.counter+1})
  }
  addClick1(e){
    this.setState({counter1: this.state.counter1+1})
  }
  subClick(e){
    this.setState({counter: this.state.counter-1})
  }
  subClick1(e){
    this.setState({counter1: this.state.counter1-1})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
         
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p> <button onClick={this.subClick.bind(this)}>&lt;</button>{this.state.counter}
          <button onClick={this.addClick.bind(this)}>&gt;</button></p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Sub subClick1={this.subClick1.bind(this)}/>{this.state.counter1} <Add addClick1 ={this.addClick1.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
