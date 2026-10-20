import { test } from 'node:test';
import assert from 'node:assert';
import { sumar, restar } from '../src/calculadora.js';

test('Debe restar dos números', () => {
  assert.strictEqual(restar(5, 1), 4);
});

test('Debe sumar dos números', () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test('Debe sumar con negativos', () => {
  assert.strictEqual(sumar(-1, 1), 0);
});
