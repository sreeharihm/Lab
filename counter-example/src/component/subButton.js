import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class subButton extends Component {
 
  render() {
    return (
      <div className="subbutton">

        <button onClick={this.props.subClick1}>&lt;</button>
        { this.props.children }
      </div>
    )
  }
}

//ReactDOM.render(<subButton/>, document.getElementById('app'));
