function getRandomPoints() {
  let point: number[] = [];
  for (let i = 0; i < 4; i++) {
    point[i] = Math.floor(Math.random() * 4);
    if (i === 3 && point[0] === point[2] && point[1] === point[3]) {
      point[3] = (point[1] + 1) % 4;
    }
  }
  return point;
}

export default getRandomPoints;
