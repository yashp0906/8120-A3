import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("calculates paint required for 100 sq ft with 10 sq ft/litre", () => {
    expect(paintRequiredCalculator(100, 10)).toBe(10);
  });
  test("returns fractional paint required", () => {
    expect(paintRequiredCalculator(30, 8)).toBeCloseTo(3.75, 2);
  });
});
