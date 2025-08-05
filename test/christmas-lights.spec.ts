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
        expect(christmasLights.getLightAt(x, y)).toBe(false);
      }
    }
  });

  it('should turn on all lights from 0,0 to 999,999', () => {
    christmasLights.execute('turn on 0,0 through 999,999');
    expect(christmasLights.getLightAt(0, 0)).toBe(true);
    expect(christmasLights.getLightAt(999, 999)).toBe(true);
    expect(christmasLights.getLightAt(500, 500)).toBe(true);
  });

  it('should toggle lights 0.0 to 999,0', () => {
    christmasLights.execute('turn on 0,0 through 999,999');
    christmasLights.execute('toggle 0,0 through 999,0');
    expect(christmasLights.getLightAt(0, 0)).toBe(false);
    expect(christmasLights.getLightAt(500, 0)).toBe(false);
    expect(christmasLights.getLightAt(999, 0)).toBe(false);
    expect(christmasLights.getLightAt(500, 500)).toBe(true);
  });

  it('should turn off lights from 499,499 to 500,500', () => {
    christmasLights.execute('turn off 499,499 through 500,500');
    expect(christmasLights.getLightAt(499, 499)).toBe(false);
    expect(christmasLights.getLightAt(500, 500)).toBe(false);
  });

  it('should turn on turn on correct set lights after executing many instructions', () => {
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
    }
    expect(christmasLights.getTotalLightsOn()).toBe(230022);
  });
});
