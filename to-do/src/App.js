/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. (Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

import React from "react";
import TodoItem from "./todoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log(id);
    let oldTodo = this.state.todos;
    let newTodo = oldTodo.map((todo) => {
      if (todo.id == id) {
        if (todo.completed) todo.completed = false;
        else todo.completed = true;
      }
      return todo;
    });
    this.setState({ todos: newTodo });
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
  }

  handleChangeForForms(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    // <select
    //                 value={this.state.favColor}
    //                 onChange={this.handleChange}
    //                 name="favColor"
    //             >
    //                 <option value="blue">Blue</option>
    //                 <option value="green">Green</option>
    //                 <option value="red">Red</option>
    //                 <option value="orange">Orange</option>
    //                 <option value="yellow">Yellow</option>
    //             </select>

    return <div className="todo-list">{todoItems}</div>;
  }
}
export default App;
