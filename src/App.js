import React, { Component } from "react";
import "./App.css";
import InventoryListContainer from "./Containers/InventoryListContainer"

class App extends Component {
  render() {
    return (
      <div>
        <InventoryListContainer />
      </div>
    );
  }
}

export default App;
