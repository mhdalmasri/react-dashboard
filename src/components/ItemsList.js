import React, { Component } from "react";
import "../assets/styles/list.css";

export default class ItemsList extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.items.map(item => (
            <li>{item.text}</li>
          ))}
        </ol>
      </div>
    );
  }
}
