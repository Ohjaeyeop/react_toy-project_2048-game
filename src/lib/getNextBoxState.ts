function getNextBoxState(direction: number, boxState: number[][]) {
  let checkMovePossible: boolean = false;

  if (direction === 1) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1) {
          if (j - 1 >= 0) {
            if (boxState[i][j - 1] === 1) {
              boxState[i][j - 1] = boxState[i][j];
              boxState[i][j] = 1;
              checkMovePossible = true;
            } else if (boxState[i][j - 1] === boxState[i][j]) {
              boxState[i][j - 1] += boxState[i][j];
              boxState[i][j] = 1;
              checkMovePossible = true;
            }
          }
        }
      }
    }
  }
  if (direction === 2) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1) {
          if (j + 1 < 4) {
            if (boxState[i][j + 1] === 1) {
              boxState[i][j + 1] = boxState[i][j];
              boxState[i][j] = 1;
              checkMovePossible = true;
            } else if (boxState[i][j + 1] === boxState[i][j]) {
              boxState[i][j + 1] += boxState[i][j];
              boxState[i][j] = 1;
              checkMovePossible = true;
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
              checkMovePossible = true;
            } else if (boxState[i - 1][j] === boxState[i][j]) {
              boxState[i - 1][j] += boxState[i][j];
              boxState[i][j] = 1;
              checkMovePossible = true;
            }
          }
        }
      }
    }
  }
  if (direction === 4) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boxState[i][j] > 1) {
          if (i + 1 < 4) {
            if (boxState[i + 1][j] === 1) {
              boxState[i + 1][j] = boxState[i][j];
              boxState[i][j] = 1;
              checkMovePossible = true;
            } else if (boxState[i + 1][j] === boxState[i][j]) {
              boxState[i + 1][j] += boxState[i][j];
              boxState[i][j] = 1;
              checkMovePossible = true;
            }
          }
        }
      }
    }
  }
  return { checkMovePossible, boxState };
}

export default getNextBoxState;
