import { sum } from './sum.js';
import { faker } from '@faker-js/faker';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});