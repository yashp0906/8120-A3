import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test("calculates paint cost for 100 sq units at $2 per unit", () => {
    expect(calculatePaintCost(100, 2)).toBe(200);
  });
});
