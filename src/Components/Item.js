import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, price, image_url, description } = this.props.item.details;
    return (
      <div className='card' style={{ width: "18rem" }}>
        <img
          src={image_url}
          className='card-img-top'
          style={{ maxHeight: "200px", maxWidth: "200px"}}
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>${price}</p>
        </div>

        <div className='card-body'>
          <button
            className='btn btn-primary'
            onClick={() => this.props.add(this.props.item)}>
            Add to Cart!
          </button>
          <button
            className='btn btn-primary'
            onClick={() => this.props.remove(this.props.item)}>
            Remove from Cart!
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
