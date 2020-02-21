import React, {Component} from 'react'

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
    };
  }

  increament = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decreament = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  clearCount = () => {
    this.setState({
      count: 0
    })
  }
  render(){
    return(
      <div className = "container">
        <div className = "navbar">Counter.js</div>
        <div className = "counter">
          <h1>{this.state.count}</h1>
          <button type = "button" onClick={this.increament}>Increament</button>
          <button type = "button" onClick={this.decreament}>Decreament</button>
          <button type = "button" onClick={this.clearCount}>Clear</button>
        </div>

      </div>
    );
  }
};

export default Counter;
