import search from './search';

describe('search', () => {
  it('should return an array', () => {
    expect(Array.isArray(search('query', []))).toBeTruthy();
  });
  it('should return arr containing the query if the query is in the storeArr', () => {
    expect(search('tom', ['tom', 'tim', 'tod'])).toEqual(['tom']);
  });
  it('should NOT return arr containing query if query is NOT in the storeArr', () => {
    expect(search('tom', ['ted', 'tim', 'tod'])).not.toEqual(['tom']);
  });
  it('should return an array with only up to 6 elements', () => {
    expect(
      search('t', ['tom', 'ted', 'tim', 'tod', 'tara', 'tammy', 'test']).length
    ).toBe(6);
  });
  it('should not be case sensative', () => {
    expect(search('TOM', ['tom', 'tim', 'tod'])).toEqual(['tom']);
  });
});
