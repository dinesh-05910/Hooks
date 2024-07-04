import React, { Component } from 'react'

export class ClsCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default ClsCounter