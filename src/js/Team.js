export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Error');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    this.members = new Set([...characters]);
  }

  toArray() {
    return [...this.members];
  }
}
