import removeQuotesAndBraces from './removeQuotesAndBraces';

describe('removeQuotesAndBraces', () => {
  it('should remove quotes and braces from input strings, and add space after commas', () => {
    expect(removeQuotesAndBraces('{"test1,test2"}')).toBe('test1, test2');
  });
  it('should return the same string', () => {
    expect(removeQuotesAndBraces('test')).toBe('test');
  });
  it('should return an empty string', () => {
    expect(removeQuotesAndBraces('')).toBe('');
  });
  it('should return an empty string', () => {
    expect(removeQuotesAndBraces('"{}')).toBe('');
  });
});
