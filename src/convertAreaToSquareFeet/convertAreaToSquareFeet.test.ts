import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test("converts 1 sq meter to sq feet", () => {
    expect(convertAreaToSquareFeet(1)).toBeCloseTo(10.7639, 4);
  });
});
