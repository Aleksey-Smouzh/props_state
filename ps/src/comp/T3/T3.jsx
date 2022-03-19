import React, { Component } from 'react'

export default class T3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Alex"
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
          this.setState({
              name: "Pupkin"
          })
    }


  render() {
    return (
      <div>
          <h1>{this.state.name}</h1>
          <button onClick={this.handleClick}>Click</button>
          
          
          </div>
    )
  }
}
