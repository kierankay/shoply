import React, { Component } from "react";
import "./App.css";
import InventoryListContainer from "./Containers/InventoryListContainer"
import CartWidget from "./Components/CartWidget"

class App extends Component {
  render() {
    return (
      <div className="container">
        <CartWidget cart={this.props.cart}/>
        <InventoryListContainer />
      </div>
    );
  }
}

export default App;
