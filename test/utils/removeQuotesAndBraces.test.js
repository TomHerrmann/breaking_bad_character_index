import { removeQuotesAndBraces } from '../../src/utils/removeQuotesAndBraces';

test('should removes quotes and braces from input strings, and add space after commas', () => {
  expect(removeQuotesAndBraces('{"test1,test2"}')).toBe('test1, test2');
});
