import { beforeEach, describe, expect, it } from 'vitest';
import ChristmasLights from '../src/christmas-lights';

describe('Christmas Lights', () => {
  let christmasLights: ChristmasLights;

  beforeEach(() => {
    christmasLights = new ChristmasLights();
  });

  it('should initialize all lights to off', () => {
    for (let x = 0; x < 1000; x++) {
      for (let y = 0; y < 1000; y++) {
        expect(christmasLights.getLightAt(x, y)).toBe(0);
      }
    }
  });

  it('"turn on all lights from 0,0 to 999,999" should increase their brightness by 1', () => {
    christmasLights.execute('turn on 0,0 through 999,999');
    expect(christmasLights.getLightAt(0, 0)).toBe(1);
    expect(christmasLights.getLightAt(999, 999)).toBe(1);
    expect(christmasLights.getLightAt(500, 500)).toBe(1);
  });

  it('"toggle lights from 0,0 to 999,0" should increase brightness of those lights by 2', () => {
    christmasLights.execute('turn on 0,0 through 999,999');
    christmasLights.execute('toggle 0,0 through 999,0');
    expect(christmasLights.getLightAt(0, 0)).toBe(3);
    expect(christmasLights.getLightAt(500, 0)).toBe(3);
    expect(christmasLights.getLightAt(999, 0)).toBe(3);
    expect(christmasLights.getLightAt(500, 500)).toBe(1);
  });

  it('"toggle 0,0 through 999,999" should increase totalBrightness by 2000000', () => {
    christmasLights.execute('turn on 0,0 through 999,999');
    const initialTotalBrightness = christmasLights.getTotalLightsOn();
    christmasLights.execute('toggle 0,0 through 999,999');
    expect(christmasLights.getTotalLightsOn()).toBe(
      initialTotalBrightness + 2000000,
    );
  });

  it('"turn off lights" should decrease brightness of those lights by 1, minimum to 0', () => {
    christmasLights.execute('toggle 499,499 through 500,500');
    christmasLights.execute('turn off 498,498 through 499,499');
    expect(christmasLights.getLightAt(499, 499)).toBe(1);
    expect(christmasLights.getLightAt(498, 498)).toBe(0);
  });

  it('should turn on turn on correct set of lights after executing many instructions', () => {
    expect(christmasLights.getTotalLightsOn()).toBe(0);
    const instructions = [
      'turn on 887,9 through 959,629',
      'turn on 454,398 through 844,448',
      'turn off 539,243 through 559,965',
      'turn off 370,819 through 676,868',
      'turn off 145,40 through 370,997',
      'turn off 301,3 through 808,453',
      'turn on 351,678 through 951,908',
      'toggle 720,196 through 897,994',
      'toggle 831,394 through 904,860',
    ];
    for (const instruction of instructions) {
      christmasLights.execute(instruction);
      // Debug output: print running total after each instruction
      // eslint-disable-next-line no-console
      console.log(
        `After: ${instruction} => Total brightness: ${christmasLights.getTotalLightsOn()}`,
      );
    }
    expect(christmasLights.getTotalLightsOn()).toBe(539560);
  });
});
