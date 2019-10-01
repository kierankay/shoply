import Cart from '../Components/Cart';
import { connect } from 'react-redux';
import { add, remove } from '../actions';

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = {
  add, remove
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)