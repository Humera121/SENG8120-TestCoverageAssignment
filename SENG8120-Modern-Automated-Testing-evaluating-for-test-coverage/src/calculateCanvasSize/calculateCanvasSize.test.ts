import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("handles numeric strings", () => {
    expect(calculateCanvasSize("10", "5")).toBe(50);
  });

  test("handles number inputs", () => {
    expect(calculateCanvasSize(4, 3)).toBe(12);
  });

  test("throws on non-numeric strings", () => {
    expect(() => calculateCanvasSize("abc", "3")).toThrow("Invalid input");
  });

  test("throws on NaN input", () => {
    expect(() => calculateCanvasSize(4, "NaN")).toThrow("Invalid input");
  });

  test("returns 0 if one side is 0", () => {
    expect(calculateCanvasSize("0", "100")).toBe(0);
  });
});
