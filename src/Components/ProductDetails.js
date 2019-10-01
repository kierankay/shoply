import React from 'react';
import Item from './Item';

class ProductDetails extends React.Component {

  render() {
    let item = this.props.inventory.filter(i => i.id === this.props.routeProps.match.params.id);

    return (
      <Item view="details" item={item[0]} add={this.props.add} remove={this.props.remove} />
    )
  }
}

export default ProductDetails;