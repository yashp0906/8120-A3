import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test("calculates paint cost for 100 sq units at $2 per unit", () => {
    expect(calculatePaintCost(100, 2)).toBe(200);
  });
  test("decimal cost per unit", () => {
    expect(calculatePaintCost(10, 2.5)).toBe(25);
  });
  test("large area and cost", () => {
    expect(calculatePaintCost(10000, 3)).toBe(30000);
  });
});
