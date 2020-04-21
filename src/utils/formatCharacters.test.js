import formatCharacters from './formatCharacters';

describe('formatCharacters', () => {
  it('should returns array of new objects with the expected format', () => {
    expect(formatCharacters([{ name: 'thomas', nickname: 'tom' }])).toEqual({
      'thomas tom': { name: 'thomas', nickname: 'tom' },
    });
  });
  it('should return an object with as many keys as elements in the input array', () => {
    expect(
      Object.keys(
        formatCharacters([
          { name: 'thomas', nickname: 'tom' },
          { name: 'timothy', nickname: 'tim' },
        ])
      ).length
    ).toBe(
      [
        { name: 'thomas', nickname: 'tom' },
        { name: 'timothy', nickname: 'tim' },
      ].length
    );
  });
  it('should return an empty object if an empty array is passed in', () => {
    expect(formatCharacters([])).toEqual({});
  });
  it('should return with lowercase keys', () => {
    expect(formatCharacters([{ name: 'Thomas', nickname: 'Tom' }])).toEqual({
      'thomas tom': { name: 'Thomas', nickname: 'Tom' },
    });
  });
});
