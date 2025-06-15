export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  if (coveragePerLiter <= 0) {
    throw new Error("Coverage per liter must be greater than 0");
  }

  if (area < 0) {
    throw new Error("Area cannot be negative");
  }

  return Math.ceil(area / coveragePerLiter);
}
