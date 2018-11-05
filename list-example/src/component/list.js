import React, { Component } from 'react';
export default class list extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <ul className="list">
        { 
          
          this.props.items.map(function(item){
            return <li key={item}>{item}</li>
          }) 
        }
        </ul>

        <ul className="list">
        { 
          
          this.props.mItems.map(function(mitem){
            return <li key={mitem.id}>{mitem.id}--{mitem.name}</li>
          }) 
        }
        </ul>
        </div>
    )
  }
}

//ReactDOM.render(<list/>, document.getElementById('app'));
