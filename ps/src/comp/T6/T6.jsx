import React, { Component } from 'react'

export default class T6 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""     //тут может быть дефолтное имя //        
        };
        this.handleChange = this.handleChange.bind(this);

    }
     handleChange(event) {                {/*Метод с параметром " ивент", когда метод вызывается он поучает ивент обЪект содержащю строку текста от импут элемента далие мы изменяем состояние путем доступа к этой строке  через тот же ивент */}
        this.setState({
            input: event.target.value
        });
    }

    render() {
        return (
            <div>
                T6
                 <input onChange={this.handleChange}></input> {/*обрабатываем событие путем хендел ченчь */}
                <h5>Контролируемный интпут:</h5>
                <h3>{this.state.input}</h3>             {/*далие выводим состояние */}
            </div>
        )
    }
}
