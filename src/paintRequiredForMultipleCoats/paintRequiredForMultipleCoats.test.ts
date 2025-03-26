import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test("100 sq ft, 10 sq ft/liter, 2 coats", () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
  });
});
