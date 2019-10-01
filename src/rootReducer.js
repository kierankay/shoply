import { ADD, REMOVE } from "./actionTypes";
import * as data from "./data.json";

const INITIAL_STATE = {
  inventory: [],
  cart: []
};

for (let i in data.products) {
  INITIAL_STATE.inventory.push({ id: [i], details: data.products[i] });
}

console.log({ INITIAL_STATE });

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      let matchingItem = state.cart.filter(item => {
        return item.id === Object.keys(action.payload)[0];
      });

      if (matchingItem.length) {
        matchingItem[0].count += 1;
      } else {
        let matchingItem = state.inventory.filter(item => {
          return item.id === Object.keys(action.payload)[0];
        });

        matchingItem[0].count = 1;
      }

      return {
        inventory: state.inventory,
        cart: [...state.cart, ...matchingItem]
      };

    default:
      return state;
  }
}

export default rootReducer;
