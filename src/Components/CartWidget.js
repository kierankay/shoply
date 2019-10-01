import React from "react";
import {Link} from 'react-router-dom';

class CartWidget extends React.Component {

  render() {
    let count = this.props.cart.reduce((r, i) => {
      return r + i.count;
    }, 0);

    return (
      <div>
        <Link to="/cart" className="btn btn-primary">
        cart: {count}
        </Link>
      </div>
    );
  }
}

export default CartWidget;
