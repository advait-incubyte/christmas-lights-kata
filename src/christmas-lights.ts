const ACTIONS = {
  TURN_ON: 'turn on',
  TURN_OFF: 'turn off',
  TOGGLE: 'toggle',
} as const;

export default class ChristmasLights {
  private readonly lights: number[][];

  constructor() {
    this.lights = Array.from({ length: 1000 }, (): number[] =>
      Array(1000).fill(0),
    );
  }

  public getLightAt(x: number, y: number): number {
    return this.lights[x][y];
  }

  public execute(instruction: string) {
    const match = instruction.match(
      /^(turn on|turn off|toggle) (\d+,\d+) through (\d+,\d+)$/,
    );
    const [_, action, startPoint, endPoint] = match!;
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
      return total + row.reduce((rowTotal, light) => rowTotal + light, 0);
    }, 0);
  }

  private turnOn(startPoint: string, endPoint: string) {
    const { startX, startY, endX, endY } = this.extractPoints(
      startPoint,
      endPoint,
    );

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        this.lights[x][y] += 1;
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
        this.lights[x][y] = Math.max(0, this.lights[x][y] - 1);
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
        this.lights[x][y] += 2;
      }
    }
  }

  private extractPoints(startPoint: string, endPoint: string) {
    const [startX, startY] = startPoint.split(',').map(Number);
    const [endX, endY] = endPoint.split(',').map(Number);
    return { startX, startY, endX, endY };
  }
}
