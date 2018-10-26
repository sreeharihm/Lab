import React, { Component } from 'react';

export default class world extends Component {
  render() {
    return (
      <h2>
        { this.props.children }
      </h2>
    )
  }
}

//ReactDOM.render(<world/>, document.getElementById('app'));
