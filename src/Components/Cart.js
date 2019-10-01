import React from 'react';
import Item from './Item';

class Cart extends React.Component {

  render() {
    let renderedCart = this.props.cart.map(i => <Item view="cart" remove={this.props.remove} add={this.props.add} item={i} />)
    return (
      <div className='row'>{renderedCart}</div>
    )
  }
}

export default Cart;