import React, { Component } from 'react';
import logo from './logo.svg';
import List from './component/list';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count:5,
      initalItems: ["Apple","Orange","Cat","Fish"],
      mItems: [{
        id:1,
        name:"Akhil"
      },
      {
        id:2,
        name:"Austin"
      },
      {
        id:3,
        name:"Alwin"
      }
      ]
    };
  }
  addList(e){
    console.log('from the add list',e);
    /**Both logic are same */
    // var test = this.state.initalItems.slice();
    // test.push("new value");
    // this.setState({initalItems: test})
    //end
    /*
    this.setState({
       initalItems: this.state.initalItems.concat(["test"])
     });*/
console.log(e.target.value);
     var updateList = this.state.initalItems;
     console.log(updateList);
     var sea = e.target.value.toLowerCase();
     if((updateList.find(k=>k.toLowerCase()===sea))!==undefined)
     {
       alert("Found");
       var test  =[];
       test.push(sea);
       this.setState({initalItems:test})
     }
     this.setState({count:this.state.count+1})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" placeholder="Search" onChange={this.addList.bind(this)}/>
          <List items={this.state.initalItems} count={this.state.count} mItems={this.state.mItems}/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
