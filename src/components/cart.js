/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "../actions/cart-add";
import Shelf from "./shelf";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const cartItems = this.props.cart.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });

    return (
      <div className="Cart">
        <Shelf addItem={this.props.action.addToCart} />
        <h2>Your items in cart:</h2>
        <ol>{cartItems}</ol>
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
    action: bindActionCreators(cartActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
