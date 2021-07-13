function checkMovePossible(
  direction: number,
  boxState: number[][],
  isMovable: boolean[][]
) {
  if (direction === 1) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1 && isMovable[i][j]) {
          if (j - 1 >= 0) {
            if (boxState[i][j - 1] === 1) {
              return true;
            } else if (boxState[i][j - 1] === boxState[i][j]) {
              return true;
            }
          }
        }
      }
    }
  }
  if (direction === 2) {
    for (let i = 0; i < 4; i++) {
      for (let j = 3; j >= 0; j--) {
        if (boxState[i][j] > 1 && isMovable[i][j]) {
          if (j + 1 < 4) {
            if (boxState[i][j + 1] === 1) {
              return true;
            } else if (boxState[i][j + 1] === boxState[i][j]) {
              return true;
            }
          }
        }
      }
    }
  }
  if (direction === 3) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1 && isMovable[i][j]) {
          if (i - 1 >= 0) {
            if (boxState[i - 1][j] === 1) {
              return true;
            } else if (boxState[i - 1][j] === boxState[i][j]) {
              return true;
            }
          }
        }
      }
    }
  }
  if (direction === 4) {
    for (let i = 3; i >= 0; i--) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1 && isMovable[i][j]) {
          if (i + 1 < 4) {
            if (boxState[i + 1][j] === 1) {
              return true;
            } else if (boxState[i + 1][j] === boxState[i][j]) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}

export default checkMovePossible;
