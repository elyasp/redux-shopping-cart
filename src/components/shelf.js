import React, { useState, Component } from "react";

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);

    this.state = {
      itemList: ["television", "showercurtain", "flowerpot"],
    };
  }

  onClickAdd(item) {
    this.props.addItem(item);
  }

  render() {
    const shelfItems = this.state.itemList.map((item, idx) => {
      return (
        <li key={idx}>
          <button onClick={() => this.onClickAdd(item)}>[+]</button>
          {item}
        </li>
      );
    });
    return (
      <div>
        <h2>Items in Shelf</h2>
        <ul>{shelfItems}</ul>
      </div>
    );
  }
}

export default Shelf;
