import React, {Component} from 'react'

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      countType: true
    };
  }

  increament = () => {
    if(this.state.countType){
      if(this.state.count +1 <= 20){
      this.setState({
        count: this.state.count + 1
      })
    }
    else{
      this.setState({
        count: this.state.count
      })
    }
  }
  else{
    if(this.state.count +2 <= 20){
    this.setState({
      count: this.state.count + 2
    })
  }
  else{
    this.setState({
      count: this.state.count
    })
  }
  }
  }

  decreament = () => {
    if(this.state.countType){
      if(this.state.count -1 >= 0){
      this.setState({
        count: this.state.count - 1
      })
    }
    else{
      this.setState({
        count: this.state.count
      })
    }
  }
  else{
    if(this.state.count -2 >= 0){
    this.setState({
      count: this.state.count - 2
    })
  }
  else{
    this.setState({
      count: this.state.count
    })
  }
  }
}
  clearCount = () => {
    this.setState({
      count: 0
    })
  }
  changeCountType = () => {
    this.setState({
      countType: !this.state.countType
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
          <button type = "button" onClick={this.changeCountType}>{this.state.countType ? 'Single Count': 'Double Count'}</button>
        </div>

      </div>
    );
  }
};

export default Counter;
