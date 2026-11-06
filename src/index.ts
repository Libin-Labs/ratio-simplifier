function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
}
export function simplifyRatio(left: number, right: number): readonly [number, number] {
  if (!Number.isSafeInteger(left) || !Number.isSafeInteger(right))
    throw new RangeError('Expected safe integers');
  const divisor = gcd(left, right);
  return divisor === 0 ? [0, 0] : [left / divisor, right / divisor];
}
