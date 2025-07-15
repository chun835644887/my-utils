export function add(a: number, b: number): number {
  if (a < 0 || b < 0) {
    throw new Error("Numbers must be positive");
  }
  return a + b;
}