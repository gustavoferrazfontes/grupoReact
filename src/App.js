import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listTodo: [
        { id: 1, isComplete: true, text: 'lavar o cachorro' },
        { id: 2, isComplete: false, text: 'passear com o cachorro' },
        { id: 3, isComplete: true, text: 'limpar merda do cachorro' },
        { id: 4, isComplete: false, text: 'dar o cachorro' },
      ]
    };
  }

  mudou(event) {

    const todoListUpdated = this.state.listTodo.map((todo) => {
      if (todo.id == event.id)
        todo.isComplete = event.checked;
      return todo;
    });

    this.setState({ listTodo: todoListUpdated });
  }
  render() {
    return <div>
      <header><h1>ToDo App</h1></header>
      <fieldset>
        <legend>Insira uma tarefa</legend>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </fieldset>
      <ul>
        {this.state.listTodo.map(function (todo) {
          return <Linhazinha key={todo.id} todo={todo} onMudouLinhazinha={this.mudou.bind(this)} />
        }.bind(this))}
      </ul>
    </div>
  }
}

export default App;

class Linhazinha extends Component {
  constructor(props) {
    super(props);
  }
  checkboxHandler(event) {
    this.props.onMudouLinhazinha(event.target)
  }

  render() {
    return <li>
      <input
        type="checkbox"
        id={this.props.todo.id}
        checked={this.props.todo.isComplete}
        onChange={this.checkboxHandler.bind(this)}
      />
      {this.props.todo.text}
    </li>
  }
}  
