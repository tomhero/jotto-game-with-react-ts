import React from 'react'

export type guessedWord = {
  guessedWord: string;
  letterMatchCount: number;
};

export type GuessedWordListProps = {
  guessedWords: guessedWord[]
};

const GuessedWordList: React.FC<GuessedWordListProps> = (props) => {
  const guessedWordRows = props.guessedWords.map((word, index) => {
    return (
      <tr key={`guessed-word-${index}`} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    );
  });
  return (
    <div data-test="component-guessed-word-list">
      {props.guessedWords.length === 0 ?
        (
          <h2 data-test="guess-instructions">
            Plese guess a word
          </h2>
        ) : (
          <section data-test="guessed-word-list-section">
            <h3>Guessed Words</h3>
            <table>
              <thead>
                <tr>
                  <th>Matching Letters</th>
                </tr>
              </thead>
              <tbody>
                {guessedWordRows}
              </tbody>
            </table>
          </section>
        )
      }
    </div>
  )
}

export default GuessedWordList;
