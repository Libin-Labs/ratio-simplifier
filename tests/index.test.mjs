import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reduces a common factor', () => {
  assert.deepEqual(api.simplifyRatio(18, 24), [3, 4]);
});
test('handles coprime values', () => {
  assert.deepEqual(api.simplifyRatio(5, 7), [5, 7]);
});
test('preserves negative signs', () => {
  assert.deepEqual(api.simplifyRatio(-12, 18), [-2, 3]);
});
test('supports zero numerator', () => {
  assert.deepEqual(api.simplifyRatio(0, 15), [0, 1]);
});
test('supports zero pair', () => {
  assert.deepEqual(api.simplifyRatio(0, 0), [0, 0]);
});
test('rejects non-integers', () => {
  assert.throws(() => api.simplifyRatio(1, 2.5), RangeError);
});
