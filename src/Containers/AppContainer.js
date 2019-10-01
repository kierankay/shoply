import App from "../App";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(App);
