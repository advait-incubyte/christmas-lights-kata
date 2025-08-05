import { beforeEach, describe, expect, it } from 'vitest';
import ChristmasLights from '../src/christmas-lights';

describe('Christmas Lights', () => {
  let christmasLights: ChristmasLights;

  beforeEach(() => {
    christmasLights = new ChristmasLights();
  });

  it('should turn on all lights from 0,0 to 999,999', () => {
    christmasLights.turnOn('0,0', '999,999');
    expect(christmasLights.getLightAt(0, 0)).toBe(true);
    expect(christmasLights.getLightAt(999, 999)).toBe(true);
    expect(christmasLights.getLightAt(500, 500)).toBe(true);
  });

  it('should toggle lights 0.0 to 999,0', () => {
    christmasLights.turnOn('0,0', '999,999');
    christmasLights.toggle('0,0', '999,0');
    expect(christmasLights.getLightAt(0, 0)).toBe(false);
    expect(christmasLights.getLightAt(500, 0)).toBe(false);
    expect(christmasLights.getLightAt(999, 0)).toBe(false);
    expect(christmasLights.getLightAt(500, 500)).toBe(true);
  });

  it('should turn off lights from 499,499 to 500,500', () => {
    christmasLights.turnOff('499,499', '500,500');
    expect(christmasLights.getLightAt(499, 499)).toBe(false);
    expect(christmasLights.getLightAt(500, 500)).toBe(false);
  });
});
