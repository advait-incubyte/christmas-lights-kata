export default class ChristmasLights {
  private readonly lights: boolean[][];

  constructor() {
    this.lights = Array.from({ length: 1000 }, (): boolean[] =>
      Array(1000).fill(false),
    );
  }

  public getLightAt(x: number, y: number): boolean {
    return this.lights[x][y];
  }

  public turnOn(startPoint: string, endPoint: string) {
    const { startX, startY, endX, endY } = this.extractPoints(
      startPoint,
      endPoint,
    );

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        this.lights[x][y] = true;
      }
    }
  }

  public toggle(startPoint: string, endPoint: string) {
    const { startX, startY, endX, endY } = this.extractPoints(
      startPoint,
      endPoint,
    );

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        this.lights[x][y] = !this.lights[x][y];
      }
    }
  }

  public turnOff(startPoint: string, endPoint: string) {
    const { startX, startY, endX, endY } = this.extractPoints(
      startPoint,
      endPoint,
    );
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        this.lights[x][y] = false;
      }
    }
  }

  private extractPoints(startPoint: string, endPoint: string) {
    const [startX, startY] = startPoint.split(',').map(Number);
    const [endX, endY] = endPoint.split(',').map(Number);
    return { startX, startY, endX, endY };
  }
}
