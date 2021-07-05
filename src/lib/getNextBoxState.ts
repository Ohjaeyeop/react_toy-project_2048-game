import getRandomPoint from "./getRandomPoint";

function getNextBoxState(direction: number, boxState: number[][]) {
  let flag: number = 1;
  let whole_flag: number = 0;
  if (direction === 1) {
    while (flag) {
      flag = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (boxState[i][j] > 1) {
            if (j - 1 >= 0) {
              if (boxState[i][j - 1] === 1) {
                boxState[i][j - 1] = boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              } else if (boxState[i][j - 1] === boxState[i][j]) {
                boxState[i][j - 1] += boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              }
            }
          }
        }
      }
    }
  }
  if (direction === 2) {
    while (flag) {
      flag = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (boxState[i][j] > 1) {
            if (j + 1 < 4) {
              if (boxState[i][j + 1] === 1) {
                boxState[i][j + 1] = boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              } else if (boxState[i][j + 1] === boxState[i][j]) {
                boxState[i][j + 1] += boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              }
            }
          }
        }
      }
    }
  }
  if (direction === 3) {
    while (flag) {
      flag = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (boxState[i][j] > 1) {
            if (i - 1 >= 0) {
              if (boxState[i - 1][j] === 1) {
                boxState[i - 1][j] = boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              } else if (boxState[i - 1][j] === boxState[i][j]) {
                boxState[i - 1][j] += boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              }
            }
          }
        }
      }
    }
  }
  if (direction === 4) {
    while (flag) {
      flag = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (boxState[i][j] > 1) {
            if (i + 1 < 4) {
              if (boxState[i + 1][j] === 1) {
                boxState[i + 1][j] = boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              } else if (boxState[i + 1][j] === boxState[i][j]) {
                boxState[i + 1][j] += boxState[i][j];
                boxState[i][j] = 1;
                flag = 1;
                whole_flag = 1;
              }
            }
          }
        }
      }
    }
  }
  if (whole_flag === 1) {
    let point: number[] = getRandomPoint(boxState);
    boxState[point[0]][point[1]] = point[2];
  }
  return boxState;
}

export default getNextBoxState;
