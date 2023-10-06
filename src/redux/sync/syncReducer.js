import { ADD_AMOUNT } from "./syncTypes"

const initialState = {
  count :10
}

export const syncReducer = (state =initialState, action ) => {
  switch(action.type) {
    case ADD_AMOUNT: 
      return {
        ...state , 
        count : state.count + action.payload
      }
    default :
     return state
  }
}