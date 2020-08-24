import Character from '../Character';

describe('Character', () => {
  test('Test Character', () => {
    const gamer = new Character('aca', 'Bowman', 100, 2, 15, 15);
    expect(gamer).toEqual({
      attack: 15, defence: 15, health: 100, level: 2, name: 'aca', type: 'Bowman',
    });
  });

  test('Test Character 9', () => {
    const gamer = new Character('acacascsd', 'Bowman', 100, 2, 15, 15);
    expect(gamer).toEqual({
      attack: 15, defence: 15, health: 100, level: 2, name: 'acacascsd', type: 'Bowman',
    });
  });

  test('Test Error levelUp', () => {
    expect(() => {
      const gamer = new Character('acaa', 'Bowman', -1, 1, 30, 70);
      gamer.levelUp();
    }).toThrow();
  });

  test('Test Error levelUp not toThrow', () => {
    const gamer = new Character('acaa', 'Bowman', 2, 1, 30, 70);
    gamer.levelUp();
    expect(gamer).toEqual({
      attack: 36, defence: 84, health: 100, level: 2, name: 'acaa', type: 'Bowman',
    });
  });

  test('Test Error name number', () => {
    expect(() => new Character(2, 'Bowman', 100, 2, 30, 70)).toThrow(new Error('Error name'));
  });

  test('Test Error name >10', () => {
    expect(() => new Character('ksdlfjsdalkfhasdlkjh', 'Bowman', 100, 2, 30, 70)).toThrow(new Error('Error name'));
  });

  test('Test Error name <2', () => {
    expect(() => new Character('k', 'Bowman', 100, 2, 30, 70)).toThrow(new Error('Error name'));
  });

  test('Test Error type', () => {
    expect(() => new Character('aca', 11, 50, 4, 35, 45)).toThrow();
  });

  test('Test damains', () => {
    const gamer = new Character('asasaa', 'Bowman', 1, 1, 30, 70);
    expect(gamer.damage(10)).toEqual();
  });

  test('Test damains - ', () => {
    const gamer = new Character('asasaa', 'Bowman', -1, 1, 30, 70);
    expect(gamer.damage(10)).toBeUndefined();
  });
});
