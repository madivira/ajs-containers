export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof name === 'string' && (name.length > 2 && name.length < 10)) {
      this.name = name;
    } else {
      throw new Error('Error name');
    }

    if (typeof type === 'string') {
      this.type = type;
    } else {
      throw new Error('Error type');
    }

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health >= 0) {
      this.level += 1;
      this.attack = Math.ceil(this.attack + (this.attack / 100) * 20);
      this.defence = Math.ceil(this.defence + (this.defence / 100) * 20);
      this.health = 100;
    } else {
      throw new Error('Sorry, you are dead');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
