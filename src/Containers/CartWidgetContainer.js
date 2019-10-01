import CartWidget from '../Components/CartWidget';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartWidget)