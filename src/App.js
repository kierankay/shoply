import React, { Component } from "react";
import "./App.css";
import InventoryListContainer from "./Containers/InventoryListContainer"
import CartWidgetContainer from "./Containers/CartWidgetContainer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Remove container from app, add to cartwidget */}
        <CartWidgetContainer />
        <InventoryListContainer />
      </React.Fragment>
    );
  }
}

export default App;
