import React, { useState, Component } from "react";

class Shelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: ["television", "showercurtain", "flowerpot"],
    };
  }

  render() {
    const shelfItems = this.state.itemList.map((item, idx) => {
      return (
        <li key={idx}>
          <button>[+]</button>
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

export default ShopList;
