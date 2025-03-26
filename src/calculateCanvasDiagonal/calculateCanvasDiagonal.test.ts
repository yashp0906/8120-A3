import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should return the correct diagonal when width is 0', () => {
    expect(calculateCanvasDiagonal(0, 5)).toBe(5);
  });
  test("Diagonal with large values", () => {
    expect(calculateCanvasDiagonal(3000, 4000)).toBeCloseTo(5000);
  });

});
