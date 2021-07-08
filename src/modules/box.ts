import { createAction, ActionType, createReducer } from "typesafe-actions";

const INITIALIZE = "box/INITIALIZE";
const UPDATEBOXSTATE = "box/UPDATEBOXSTATE";
const CREATENEWBOX = "box/CREATENEWBOX";

export const initialize = createAction(INITIALIZE)<number[]>();
export const updateboxstate = createAction(UPDATEBOXSTATE)<number[][]>();
export const createnewbox = createAction(CREATENEWBOX)<number[]>();

const actions = {
  initialize,
  updateboxstate,
  createnewbox,
};
type BoxAction = ActionType<typeof actions>;

type BoxState = {
  boxstate: number[][];
};

const initialState: BoxState = {
  boxstate: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
};

const box = createReducer<BoxState, BoxAction>(initialState, {
  [INITIALIZE]: (state, { payload: point }) => ({
    boxstate: state.boxstate.map((innerArray, index1) => {
      return innerArray.map((number, index2) => {
        if (
          (index1 === point[0] && index2 === point[1]) ||
          (index1 === point[2] && index2 === point[3])
        ) {
          return 2;
        }
        return 1;
      });
    }),
  }),
  [UPDATEBOXSTATE]: (state, { payload: nextBoxState }) => ({
    boxstate: nextBoxState.map((innerArray) => {
      return innerArray.map((number) => {
        return number;
      });
    }),
  }),
  [CREATENEWBOX]: (state, { payload: point }) => ({
    boxstate: state.boxstate.map((innerArray, i) => {
      return innerArray.map((number, j) => {
        if (i === point[0] && j === point[1]) {
          return point[2];
        }
        return number;
      });
    }),
  }),
});

export default box;
