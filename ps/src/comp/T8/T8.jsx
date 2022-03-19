import React, { Component } from "react";
import { Button } from '@mui/material';





export default class T8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    {
      /*Метод с параметром " ивент", когда метод вызывается он поучает ивент обЪект содержащю строку текста от импут элемента далие мы изменяем состояние путем доступа к этой строке  через тот же ивент */
    }
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault(); // привент дефолт это обработчик отправки чтобы страница не презагружальсь
    this.setState({
      input: this.state.input,
      items: [...this.state.items, this.state.input], // spred ES6
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}></input>{" "}
          {/*обрабатываем событие путем хендел ченчь */}
          <button type="submit">submit </button>
          <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button/>



        </form>
        T8
        <h5>Контролируемный интпут:</h5>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
