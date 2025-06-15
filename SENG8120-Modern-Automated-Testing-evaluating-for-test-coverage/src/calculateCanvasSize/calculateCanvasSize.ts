export default function calculateCanvasSize(length: string | number, width: string | number): number {
  const l = typeof length === 'string' ? parseInt(length) : length;
  const w = typeof width === 'string' ? parseInt(width) : width;

  if (isNaN(l) || isNaN(w)) {
    throw new Error("Invalid input: Length and Width must be numbers or numeric strings");
  }

  return l * w;
}