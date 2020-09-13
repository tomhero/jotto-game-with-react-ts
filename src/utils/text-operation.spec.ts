import { getLetterMatchCount } from './text-operation';

describe('getLetterMatchCount()', () => {
  const secretWord = 'inquiry';
  it('return correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('some', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  it('return the correct count when there is 1 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('time', secretWord);
    expect(letterMatchCount).toBe(1);
  });
  it('return the correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('qwerty', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  it('return correct count when there are duplicate matching letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('tenet', secretWord);
    expect(letterMatchCount).toBe(1);
  });
});
