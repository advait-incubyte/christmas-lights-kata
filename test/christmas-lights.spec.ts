import { describe, expect, it } from "vitest";
import { christmasLights } from "../src/christmas-lights";

describe('Christmas Lights', () => {
  it('should light up all lights for 0,0 to 999,999', () => {
    const lights = christmasLights('ON', '0,0', '999,999');
    expect(lights[0][0]).toBe(true);
    expect(lights[999][999]).toBe(true);
    expect(lights[500][500]).toBe(true);
  })
})