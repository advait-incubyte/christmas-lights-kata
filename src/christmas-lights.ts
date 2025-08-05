const ACTIONS = {
  TURN_ON: 'turn on',
  TURN_OFF: 'turn off',
  TOGGLE: 'toggle',
} as const;

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

  public execute(instruction: string) {
    const match = instruction.match(
      /^(turn on|turn off|toggle) (\d+,\d+) through (\d+,\d+)$/,
    );
    const [, action, startPoint, endPoint] = match!;
    switch (action) {
      case ACTIONS.TURN_ON:
        return this.turnOn(startPoint, endPoint);
      case ACTIONS.TURN_OFF:
        return this.turnOff(startPoint, endPoint);
      case ACTIONS.TOGGLE:
        return this.toggle(startPoint, endPoint);
    }
  }

  getTotalLightsOn() {
    return this.lights.reduce((total, row) => {
      return total + row.filter((light) => light).length;
    }, 0);
  }

  private turnOn(startPoint: string, endPoint: string) {
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

  private turnOff(startPoint: string, endPoint: string) {
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

  private toggle(startPoint: string, endPoint: string) {
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

  private extractPoints(startPoint: string, endPoint: string) {
    const [startX, startY] = startPoint.split(',').map(Number);
    const [endX, endY] = endPoint.split(',').map(Number);
    return { startX, startY, endX, endY };
  }
}
