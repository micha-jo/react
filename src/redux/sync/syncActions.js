import { ADD_AMOUNT } from "./syncTypes"

export const addAmount = (amoutToAdd) => {
  return{
    type: ADD_AMOUNT, 
    payload: amoutToAdd
  }
}