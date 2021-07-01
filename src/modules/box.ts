import { createAction, ActionType, createReducer } from "typesafe-actions";

const INITIALIZE = "box/INITIALIZE";
const LEFTARROWCLICK = "box/LEFTARROWCLICK";
const RIGHTARROWCLICK = "box/RIGHTARROWCLICK";
const UPARROWCLICK = "box/UPARROWCLICK";
const DOWNARROWCLICK = "box/DOWNARROWCLICK";

export const initialize = createAction(INITIALIZE)<number[]>();
export const leftarrowclick = createAction(LEFTARROWCLICK)();
export const rightarrowclick = createAction(RIGHTARROWCLICK)();
export const uparrowclick = createAction(UPARROWCLICK)();
export const downarrowclick = createAction(DOWNARROWCLICK)();

const actions = {
  initialize,
  leftarrowclick,
  rightarrowclick,
  uparrowclick,
  downarrowclick,
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
});

export default box;
