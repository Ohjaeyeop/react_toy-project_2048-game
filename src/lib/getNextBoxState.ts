function getNextBoxState(
  direction: number,
  boxState: number[][],
  isMovable: boolean[][]
) {
  if (direction === 1) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1) {
          if (j - 1 >= 0) {
            if (boxState[i][j - 1] === 1) {
              boxState[i][j - 1] = boxState[i][j];
              boxState[i][j] = 1;
            } else if (
              boxState[i][j - 1] === boxState[i][j] &&
              isMovable[i][j]
            ) {
              isMovable[i][j - 1] = false;
              boxState[i][j - 1] += boxState[i][j];
              boxState[i][j] = 1;
            }
          }
        }
      }
    }
  }
  if (direction === 2) {
    for (let i = 0; i < 4; i++) {
      for (let j = 3; j >= 0; j--) {
        if (boxState[i][j] > 1) {
          if (j + 1 < 4) {
            if (boxState[i][j + 1] === 1) {
              boxState[i][j + 1] = boxState[i][j];
              boxState[i][j] = 1;
            } else if (
              boxState[i][j + 1] === boxState[i][j] &&
              isMovable[i][j]
            ) {
              isMovable[i][j + 1] = false;
              boxState[i][j + 1] += boxState[i][j];
              boxState[i][j] = 1;
            }
          }
        }
      }
    }
  }
  if (direction === 3) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1) {
          if (i - 1 >= 0) {
            if (boxState[i - 1][j] === 1) {
              boxState[i - 1][j] = boxState[i][j];
              boxState[i][j] = 1;
            } else if (
              boxState[i - 1][j] === boxState[i][j] &&
              isMovable[i][j]
            ) {
              isMovable[i - 1][j] = false;
              boxState[i - 1][j] += boxState[i][j];
              boxState[i][j] = 1;
            }
          }
        }
      }
    }
  }
  if (direction === 4) {
    for (let i = 3; i >= 0; i--) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1) {
          if (i + 1 < 4) {
            if (boxState[i + 1][j] === 1) {
              boxState[i + 1][j] = boxState[i][j];
              boxState[i][j] = 1;
            } else if (
              boxState[i + 1][j] === boxState[i][j] &&
              isMovable[i][j]
            ) {
              isMovable[i + 1][j] = false;
              boxState[i + 1][j] += boxState[i][j];
              boxState[i][j] = 1;
            }
          }
        }
      }
    }
  }
  return [boxState, isMovable];
}

export default getNextBoxState;
