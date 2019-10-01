import React from "react";
import { Link } from "react-router-dom";

class Item extends React.Component {

  render() {

    const { name, price, image_url, description } = this.props.item.details;
    return (
      <div className='card' style={{ width: "18rem" }}>
        <img
          src={image_url}
          className='card-img-top'
          style={{ maxHeight: "200px", maxWidth: "200px" }}
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>${price}</p>
          {this.props.view === "details" ?
            <p className='card-text'>{description}</p>
            : null
          }
        </div>

        <div className='card-body'>
          {this.props.view !== "details" ?
            <React.Fragment>
              <Link
                to={`/products/${this.props.item.id}`}>
                View this Item!
              </Link>
              <br />
            </React.Fragment>
            : null}
          <button
            className='btn btn-primary btn-block'
            onClick={() => this.props.add(this.props.item)}>
            Add to Cart!
          </button><br />
          <button
            className='btn btn-primary btn-block'
            onClick={() => this.props.remove(this.props.item)}>
            Remove from Cart!
          </button><br />
          {this.props.view === "cart" ?
            `Quantity in your cart: ${this.props.item.count}`
            : null
          }
        </div>
      </div>
    );
  }
}

export default Item;


