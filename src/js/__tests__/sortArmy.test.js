import sortArmy from '../app';

describe('sortArmy:', () => {
  test('should sort army from the highest health to the lowest', () => {
    const result = sortArmy([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
    expect(result).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });
  test('should sort army from the highest health to the lowest', () => {
    const result = sortArmy([
      { name: 'мечник', health: 100 },
      { name: 'маг', health: 100 },
      { name: 'пращник', health: 50 },
      { name: 'лучник', health: 0 },
      { name: 'канонир', health: 100 },
      { name: 'всадник', health: 15 },
      { name: 'рыцарь', health: 45 },
      { name: 'мушкетёр', health: 90 },
    ]);
    expect(result).toEqual([
      { name: 'канонир', health: 100 },
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 100 },
      { name: 'мушкетёр', health: 90 },
      { name: 'пращник', health: 50 },
      { name: 'рыцарь', health: 45 },
      { name: 'всадник', health: 15 },
      { name: 'лучник', health: 0 },
    ]);
  });
});
