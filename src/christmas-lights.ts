export const christmasLights = (mode: string, startPoint: string, endPoint: string) => {
  const lights = Array.from({length: 1000}, (): boolean[] => Array(1000).fill(false));
  const [startX, startY] = startPoint.split(',').map(Number);
  const [endX, endY] = endPoint.split(',').map(Number);

  for (let x = startX; x <= endX; x++) {
    for (let y = startY; y <= endY; y++) {
      if (mode === 'ON')
        lights[x][y] = true;
    }
  }

  return lights;
}