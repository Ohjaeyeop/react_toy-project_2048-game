import { ActionType, createAction, createReducer } from "typesafe-actions";

const INITIALIZEEVENT = "event/INITIALIZEEVENT";
const INITIALIZETOZERO = "event/INITIALIZETOZERO";
const UPDATEEVENT = "event/UPDATEEVENT";

export const initializeevent = createAction(INITIALIZEEVENT)<number[]>();
export const initializetozero = createAction(INITIALIZETOZERO)();
export const updateevent = createAction(UPDATEEVENT)<number[][]>();

const actions = {
  initializeevent,
  updateevent,
  initializetozero,
};
type EventAction = ActionType<typeof actions>;

const initialState: number[][] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const event = createReducer<number[][], EventAction>(initialState, {
  [INITIALIZEEVENT]: (state, { payload: point }) => {
    return state.map((innerArray, i) => {
      return innerArray.map((number, j) => {
        if (
          (i === point[0] && j === point[1]) ||
          (i === point[2] && j === point[3])
        ) {
          return 1;
        }
        return 0;
      });
    });
  },
  [UPDATEEVENT]: (state, { payload: nextEventState }) => {
    return nextEventState.map((innerArray) => {
      return innerArray.map((number) => {
        return number;
      });
    });
  },
  [INITIALIZETOZERO]: (state) => {
    return [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  },
});

export default event;
