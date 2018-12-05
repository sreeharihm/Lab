import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class addButton extends Component {

  render() {
    return (
      <div className="addbutton">
        <button onClick={this.props.addClick1}>&gt;</button>
       
      </div>
    )
  }
}

//ReactDOM.render(<addButton/>, document.getElementById('app'));
