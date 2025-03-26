import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test("estimates time to paint 100 sq ft at 20 sq ft/hr", () => {
    expect(estimatePaintingTime(100, 20)).toBe(5);
  });
});

