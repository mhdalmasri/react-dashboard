import React, { Component } from "react";
import "../assets/styles/memo.css";
import ItemsList from "./ItemsList";

export default class Memo extends Component {
  constructor(props) {
    super(props);
    this.localStorage = JSON.parse(localStorage.getItem("items"));
    this.items = this.localStorage !== null ? this.localStorage : [];
    this.state = { text: "", items: this.items };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    // to stop reload
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: this.state.text
    };
    const newItems = this.state.items.concat(newItem);

    this.setState(state => ({
      items: newItems,
      text: ""
    }));
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  render() {
    return (
      <div>
        <ItemsList items={this.state.items} />

        <h3>what's your plan for today ? !</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="listItem"
            onChange={this.handleChange}
            value={this.state.text}
            required
          />
          <button>Add # {this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}
