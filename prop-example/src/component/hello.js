import React, { Component } from 'react';

export default class hello extends Component {
  render() {
    return (
       <h2> { this.props.children }</h2>
    )
  }
}

//ReactDOM.render(<hello/>, document.getElementById('app'));
