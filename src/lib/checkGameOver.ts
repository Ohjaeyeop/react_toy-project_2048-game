import checkMovePossible from "./checkMovePossible";

export default function checkGameOver(boxState: number[][]) {
  let isMovable: boolean[][] = Array.from(Array(4), () => Array(4).fill(true));
  if (
    checkMovePossible(1, boxState, isMovable) === false &&
    checkMovePossible(2, boxState, isMovable) === false &&
    checkMovePossible(3, boxState, isMovable) === false &&
    checkMovePossible(4, boxState, isMovable) === false
  ) {
    return true;
  }
  return false;
}
