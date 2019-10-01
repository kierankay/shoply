import { ADD, REMOVE } from "./actionTypes";

export function add(item) {
  return {
    type: ADD,
    payload: item
  }
}

export function remove(item) {
  return {
    type: REMOVE,
    payload: item
  }
}
