import React from "react";
import Item from "./Item";

class InventoryList extends React.Component {

  render() {
    const inventory = this.props.inventory.map(i => {
      return <Item item={i} add={this.props.add} remove={this.props.remove} key={i.id} />;
    });

    return <div className='row'>{inventory}</div>;
  }
}

export default InventoryList;
