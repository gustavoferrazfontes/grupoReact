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

  onChange(todoChecked) {
    const todoListUpdated = this.state.listTodo.map((todo) => {
      if (todo.id === todoChecked.id)
        todo.isComplete = !todoChecked.isComplete;
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
          return <Todo key={todo.id} {...todo} change={this.onChange.bind(this, todo)} />
        }.bind(this))}
      </ul>
    </div>
  }
}

export default App;

const Todo = props => {

  return (
    <li>
      <input
        type="checkbox"
        id={props.id}
        checked={props.isComplete}
        onChange={props.change.bind(this)} />
      {props.text}
    </li>
  )
}  
