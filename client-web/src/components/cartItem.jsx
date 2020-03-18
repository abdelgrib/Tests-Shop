import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <div>
        <span>{this.props.item.name}</span>
        <span className={this.getBadgeClasses()}>{this.props.item.quantity}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.item)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.item)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.item.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.quantity === 0 ? "warning" : "primary";
    return classes;
  }
}

export default CartItem;
