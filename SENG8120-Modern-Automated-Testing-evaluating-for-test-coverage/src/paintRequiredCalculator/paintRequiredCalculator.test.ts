import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("exact division", () => {
    expect(paintRequiredCalculator(50, 10)).toBe(5);
  });

  test("rounds up fractional result", () => {
    expect(paintRequiredCalculator(52, 10)).toBe(6);
  });

  test("throws on zero coverage", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow("Coverage per liter must be greater than 0");
  });

  test("throws on negative area", () => {
    expect(() => paintRequiredCalculator(-10, 5)).toThrow("Area cannot be negative");
  });

  test("returns 0 when area is 0", () => {
    expect(paintRequiredCalculator(0, 5)).toBe(0);
  });
});

