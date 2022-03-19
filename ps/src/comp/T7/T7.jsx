import React, { Component } from 'react'

export default class T7 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            submit: ""     //тут может быть дефолтное имя //        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(event) {                {/*Метод с параметром " ивент", когда метод вызывается он поучает ивент обЪект содержащю строку текста от импут элемента далие мы изменяем состояние путем доступа к этой строке  через тот же ивент */}
        this.setState({
            input: event.target.value
        });
    }
      handleSubmit(event){
          event.preventDefault()
          this.setState({
              submit: this.state.input
          })
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                <input value={this.state.input} onChange={this.handleChange}></input> {/*обрабатываем событие путем хендел ченчь */}
                <button type='submit'>submit </button>
                </form>
                T7
                 
                <h5>Контролируемный интпут:</h5>
                <h3>{this.state.submit}</h3>             {/*далие выводим состояние */}
            </div>
        )
    }
}
