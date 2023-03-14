import { getStatusHealth, sortedListHeroes } from '../myFunc';

test('get status health heroes', () => {
  const params = { name: 'Маг', health: 90 };
  const result = getStatusHealth(params);
  expect(result).toBe('healthy');
});

const listParams = [
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 45 }, 'wounded'],
  [{ name: 'лучник', health: 80 }, 'healthy'],
];

test.each(listParams)('test health= %o => %s ', (health, expected) => {
  const result = getStatusHealth(health);
  expect(result).toBe(expected);
});

test('sorted heroes on helth', () => {
  const listParamsNoSort = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const amountSorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortedListHeroes(listParamsNoSort);
  expect(result).toEqual(amountSorted);
});
