import React from 'react'

export type guessedWord = {
  guessedWord: string;
  letterMatchCount: number;
};

export type GuessedWordListProps = {
  guessedWords: guessedWord[]
};

const GuessedWordList: React.FC<GuessedWordListProps> = (props) => {
  return (
    <div data-test="component-guessed-word-list">
    </div>
  )
}

export default GuessedWordList;
