import { combineReducers } from "redux";
import box from "./box";

const rootReducer = combineReducers({
  box,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
