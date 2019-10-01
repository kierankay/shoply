import App from "../App";
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    inventory: state.inventory,
    cart: state.cart
  };
}

export default connect(mapStateToProps)(App);
