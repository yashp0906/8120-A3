import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test("adds paint cost and labor cost", () => {
    expect(calculateTotalCost(100, 200)).toBe(300);
  });
});
