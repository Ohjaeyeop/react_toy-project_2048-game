function getRandomPoint(boxState: number[][]) {
  let point: number[] = [];
  while (true) {
    point[0] = Math.floor(Math.random() * 4);
    point[1] = Math.floor(Math.random() * 4);
    if (boxState[point[0]][point[1]] === 1) {
      break;
    }
  }
  point[2] = Math.floor(Math.random() * 4) === 0 ? 4 : 2;
  return point;
}

export default getRandomPoint;
