import sortArmy from '../app';

describe('sortArmy:', () => {
  test('should sort army from the highest health to the lowest', () => {
    const result = sortArmy([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
    expect(result).toBe([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });
});
