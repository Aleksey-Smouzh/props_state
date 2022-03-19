import React, { Component } from 'react'

export default class T2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "first"   //тут пишут имя  конструктрр 
    }
  }
  render() {
    
    return (
      <div >{this.state.name}</div>  // тут пишется стэет 
    )
  }
}
