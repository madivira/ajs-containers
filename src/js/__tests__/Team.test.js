import Team from '../Team';
import Character from '../Character';

describe('Test Team', () => {
  const character1 = new Character('name1', 'Daemon', 10, 1, 10, 10);
  const character2 = new Character('name2', 'Zombie', 20, 2, 20, 20);
  const character3 = new Character('name3', 'Bowman', 30, 3, 30, 30);
  test('add one', () => {
    const team = new Team();
    team.add(character1);
    expect(team.toArray()).toEqual([{
      attack: 10,
      defence: 10,
      health: 10,
      level: 1,
      name: 'name1',
      type: 'Daemon',
    }]);
  });
  test('add two', () => {
    const team = new Team();
    team.add(character1);
    team.add(character2);
    expect(team.toArray()).toEqual([{
      attack: 10,
      defence: 10,
      health: 10,
      level: 1,
      name: 'name1',
      type: 'Daemon',
    }, {
      attack: 20,
      defence: 20,
      health: 20,
      level: 2,
      name: 'name2',
      type: 'Zombie',
    }]);
  });
  test('add two repeat', () => {
    expect(() => {
      const team = new Team();
      team.add(character1);
      team.add(character2);
      team.add(character2);
      team.add(character3);
      team.toArray();
    }).toThrow();
  });
  test('add all', () => {
    const team = new Team();
    team.addAll(character1, character2, character3);
    expect(team.toArray()).toEqual([{
      attack: 10,
      defence: 10,
      health: 10,
      level: 1,
      name: 'name1',
      type: 'Daemon',
    }, {
      attack: 20,
      defence: 20,
      health: 20,
      level: 2,
      name: 'name2',
      type: 'Zombie',
    }, {
      attack: 30,
      defence: 30,
      health: 30,
      level: 3,
      name: 'name3',
      type: 'Bowman',
    }]);
  });
  test('add all repeat', () => {
    const team = new Team();
    team.addAll(character1, character1, character2, character2, character3);
    expect(team.toArray()).toEqual([{
      attack: 10,
      defence: 10,
      health: 10,
      level: 1,
      name: 'name1',
      type: 'Daemon',
    }, {
      attack: 20,
      defence: 20,
      health: 20,
      level: 2,
      name: 'name2',
      type: 'Zombie',
    }, {
      attack: 30,
      defence: 30,
      health: 30,
      level: 3,
      name: 'name3',
      type: 'Bowman',
    }]);
  });
});
