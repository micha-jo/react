import { combineReducers } from "redux";
import { syncReducer } from "./sync/syncReducer";

const rootReducer = combineReducers({
  sync: syncReducer

})

export default rootReducer