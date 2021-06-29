import { createAction, ActionType, createReducer } from "typesafe-actions";

const INITIALIZE = "box/INITIALIZE";

type BoxState = {
  box: number[][];
};

const initialState: BoxState = {
  box: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

function box(state: BoxState = initialState) {
  return state;
}

export default box;
