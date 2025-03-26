import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test("converts 1 sq meter to sq feet", () => {
    expect(convertAreaToSquareFeet(1)).toBeCloseTo(10.7639, 4);
  });
  test("converts decimal area", () => {
    expect(convertAreaToSquareFeet(2.5)).toBeCloseTo(26.90975, 5);
  });
});
