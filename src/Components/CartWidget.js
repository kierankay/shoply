import React from "react";

class CartWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let count = this.props.cart.reduce((r, i) => {
      return r + i.count;
    }, 0);

    return (
      <div>
        <p>cart: {count}</p>
      </div>
    );
  }
}

export default CartWidget;
