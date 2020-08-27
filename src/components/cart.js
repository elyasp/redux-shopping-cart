/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CartActions from "../actions/cart-add";
import Shelf from "./shelf";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const CartItems = this.props.cart.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });

    return (
      <div className="Cart">
        <Shelf addItem={this.props.actions.addToCart} />
        <h1>Shopping Bag</h1>
        <ol>{CartItems}</ol>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(CartActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);