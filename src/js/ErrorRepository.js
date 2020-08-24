export default class ErrorRepository {
  constructor() {
    this.err = new Map([[1, 'Error one'], [2, 'Error two'], [3, 'Error three'], [4, 'Error four'], [5, 'Error five']]);
  }

  translate(code) {
    if (this.err.has(code)) {
      return this.err.get(code);
    }
    return 'Unknown error';
  }
}
