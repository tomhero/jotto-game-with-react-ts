/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word to compare
 * @param {string} secretWord - Secret Word for each turn
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord: string, secretWord: string): number {
  const guessedLetterSet = new Set(guessedWord.split(''));
  const secretLetterSet = new Set(secretWord.split(''));
  return Array.from(secretLetterSet).filter(letter => guessedLetterSet.has(letter)).length;
}