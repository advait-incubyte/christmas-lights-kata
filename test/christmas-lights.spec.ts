import { describe, expect, it } from 'vitest';
import ChristmasLights from '../src/christmas-lights';

describe('Christmas Lights', () => {
  it('should light up all lights for 0,0 to 999,999', () => {
    const christmasLights = new ChristmasLights();
    christmasLights.turnOn('0,0', '999,999');
    expect(christmasLights.getLightAt(0, 0)).toBe(true);
    expect(christmasLights.getLightAt(999, 999)).toBe(true);
    expect(christmasLights.getLightAt(500, 500)).toBe(true);
  });

  it('should not light up lights for 0,0 to 999,999 when mode is OFF', () => {});
});
