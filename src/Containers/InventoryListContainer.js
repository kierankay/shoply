import InventoryList from "../Components/InventoryList";
import { add, remove } from "../actions.js";
import {connect} from "react-redux"

function mapStateToProps(state) {
    console.log(state)
  return {
    inventory: state.inventory
  };
}

const mapDispatchToProps = {
  add,
  remove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryList);
