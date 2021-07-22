import { combineReducers } from "redux";
import box from "./box";
import event from "./event";

const rootReducer = combineReducers({
  box,
  event,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
