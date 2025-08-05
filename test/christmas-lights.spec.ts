import { describe, expect, it } from 'vitest';
import ChristmasLights from '../src/christmas-lights';

describe('Christmas Lights', () => {
  it('should turn on all lights from 0,0 to 999,999', () => {
    const christmasLights = new ChristmasLights();
    christmasLights.turnOn('0,0', '999,999');
    expect(christmasLights.getLightAt(0, 0)).toBe(true);
    expect(christmasLights.getLightAt(999, 999)).toBe(true);
    expect(christmasLights.getLightAt(500, 500)).toBe(true);
  });

  it('should toggle lights 0.0 to 999,0', () => {
    const christmasLights = new ChristmasLights();
    christmasLights.turnOn('0,0', '999,999');
    christmasLights.toggle('0,0', '999,0');
    expect(christmasLights.getLightAt(0, 0)).toBe(false);
    expect(christmasLights.getLightAt(500, 0)).toBe(false);
    expect(christmasLights.getLightAt(999, 0)).toBe(false);
    expect(christmasLights.getLightAt(500, 500)).toBe(true);
  });

  it('s');
});
