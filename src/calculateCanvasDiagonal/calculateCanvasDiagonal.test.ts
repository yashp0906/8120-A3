import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should return the correct diagonal when width is 0', () => {
    expect(calculateCanvasDiagonal(0, 5)).toBe(5);
  });

});
