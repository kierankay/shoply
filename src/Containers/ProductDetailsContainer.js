import ProductDetails from '../Components/ProductDetails';
import { connect } from 'react-redux';
import { add, remove } from '../actions';

// filter out a particular product
function mapStateToProps(state) {
  return {
    inventory: state.inventory
  }
}

const mapDispatchToProps = {
  add, remove
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)