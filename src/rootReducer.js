import { ADD, REMOVE } from "./actionTypes";
import * as data from "./data.json";

const INITIAL_STATE = {
  inventory: [],
  cart: []
};

let newInventory = Object.entries(data.products);
INITIAL_STATE.inventory = newInventory.map(e => {return {id: e[0], details: e[1]}})

function rootReducer(state = INITIAL_STATE, action) {
  let newCart = state.cart.slice();
  switch (action.type) {
    case ADD:
      let idxA = newCart.findIndex(item => { return item.id === action.payload.id });
      if (idxA >= 0) {
        newCart[idxA].count += 1
        return {
          inventory: state.inventory,
          cart: newCart
        };
      }
      else {
        let matchingItem = state.inventory.filter(item => {
          return item.id === action.payload.id;
        });
        matchingItem[0].count = 1;
        return {
          inventory: state.inventory,
          cart: [...state.cart, ...matchingItem]
        };
      }

    case REMOVE:
      let idxR = newCart.findIndex(item => { return item.id === action.payload.id });
      if (idxR >= 0 && newCart[idxR].count > 0) {
        newCart[idxR].count -= 1;
        return {
          inventory: state.inventory,
          cart: newCart
        };
      }
      return state;

    default:
      return state;
  }
}

export default rootReducer;
