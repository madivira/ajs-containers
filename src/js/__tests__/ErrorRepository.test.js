import ErrorRepository from '../ErrorRepository';

describe('Test Error', () => {
  test('get err one', () => {
    const err = new ErrorRepository();
    expect(err.translate(1)).toBe('Error one');
  });
  test('get err five', () => {
    const err = new ErrorRepository();
    expect(err.translate(5)).toBe('Error five');
  });
  test('get unknown err', () => {
    const err = new ErrorRepository();
    expect(err.translate(0)).toBe('Unknown error');
  });
});
