export function add(a: number, b: number): number {
  if (a < 0 || b < 0) {
    throw new Error("Numbers must be positive");
  }
  return a + b;
}

export function sub(a: number, b: number): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  throw new Error('a and b must be a number');
}