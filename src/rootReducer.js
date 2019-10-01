import { ADD, REMOVE } from "./actionTypes";
import * as data from "./data.json";

const INITIAL_STATE = {
  inventory: [],
  cart: []
};

for (let i in data.products) {
  INITIAL_STATE.inventory.push({ id: i, details: data.products[i] });
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      let matchingItem = state.cart.filter(item => {
        return item.id === action.payload.id;
      });

      if (matchingItem.length) {
        matchingItem[0].count += 1;

        let notItem = state.cart.filter(item => {
          return item.id !== action.payload.id;
        });

        return {
          inventory: state.inventory,
          cart: [...notItem, ...matchingItem]
        };
      } else {
        matchingItem = state.inventory.filter(item => {
          return item.id === action.payload.id;
        });

        matchingItem[0].count = 1;
        return {
          inventory: state.inventory,
          cart: [...state.cart, ...matchingItem]
        };
      }
      

    case REMOVE:
      let matchToItem = state.cart.filter(item => {
        return item.id === action.payload.id;
      });

      if (matchToItem.length && matchToItem[0].count > 0) {
        matchToItem[0].count -= 1;

        let notItem = state.cart.filter(item => {
          return item.id !== action.payload.id;
        });

        return {
          inventory: state.inventory,
          cart: [...notItem, ...matchToItem]
        };
      } 

    default:
      return state;
  }
}

export default rootReducer;
