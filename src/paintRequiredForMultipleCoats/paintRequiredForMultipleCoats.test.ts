import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test("100 sq ft, 10 sq ft/liter, 2 coats", () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
  });
  test("decimal area and coverage", () => {
    expect(paintRequiredForMultipleCoats(45.5, 9.1, 2)).toBeCloseTo(10, 5);
  });
});
