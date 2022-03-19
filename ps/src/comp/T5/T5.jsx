import React, { Component } from 'react'

export default class T5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)    // <--- тут прописываем методы
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)



    }
    increment(){
        this.setState(state =>({
            count: state.count + 1 // тут данные для выполнения для incrementa
        }));
    }
    decrement(){
        this.setState(state =>({
            count: state.count - 1 //тут данные для выполнения для decrementa
        }));
    }
  reset(){
      this.setState ({
          count: 0             //тут данные для выполнения для reset
      })
  }


    render() {
 return(
     <div>

         <button onClick={this.increment}>increment</button>
         <button onClick={this.decrement}>decrement</button>
         <button onClick={this.reset}>reset</button>
         <h1>current:{this.state.count}</h1>
     </div>
 )


}

}
