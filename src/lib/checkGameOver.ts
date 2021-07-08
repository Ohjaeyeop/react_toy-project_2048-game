import checkMovePossible from "./checkMovePossible";

export default function checkGameOver(boxState: number[][]) {
  if (
    checkMovePossible(1, boxState) === false &&
    checkMovePossible(2, boxState) === false &&
    checkMovePossible(3, boxState) === false &&
    checkMovePossible(4, boxState) === false
  ) {
    return true;
  }
  return false;
}
