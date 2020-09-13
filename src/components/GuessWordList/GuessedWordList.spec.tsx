import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GuessedWordList, { guessedWord, GuessedWordListProps } from './GuessedWordList';
import { findByTesttAttr } from '../../../test/test-utils';

describe('<GuessedWordList />', () => {
  let guessedWordListWrapper: ShallowWrapper;
  let defaultProps: GuessedWordListProps = {
    guessedWords: [],
  };

  beforeEach(() => {
    guessedWordListWrapper = shallow(<GuessedWordList {...defaultProps} />);
  });

  describe('if there are no words guessed', () => {
    beforeEach(() => {
      guessedWordListWrapper.setProps({ guessedWords: [] });
    });

    it('renders the component without error', () => {
      expect(guessedWordListWrapper).toMatchSnapshot();
      const containerComponent = findByTesttAttr(guessedWordListWrapper, 'component-guessed-word-list');
      expect(containerComponent).toHaveLength(1);
    });

    it('renders instructions to guess a word', () => {
      const instructions = findByTesttAttr(guessedWordListWrapper, 'guess-instructions');
      expect(instructions.text()).not.toBe('');
    });
  });

  describe('if there are words guessed', () => {
    const mockingWordList: guessedWord[] = [
        { guessedWord: 'qwerty', letterMatchCount: 3 },
        { guessedWord: 'asdfgh', letterMatchCount: 1 },
        { guessedWord: 'inquiry', letterMatchCount: 7 },
    ];
    beforeEach(() => {
      guessedWordListWrapper.setProps({
        guessedWords: mockingWordList,
      });
    });

    it('renders the component without error', () => {
      expect(guessedWordListWrapper).toMatchSnapshot();
      const containerComponent = findByTesttAttr(guessedWordListWrapper, 'component-guessed-word-list');
      expect(containerComponent).toHaveLength(1);
    });

    it('renders guessed word list table', () => {
      const wordList = findByTesttAttr(guessedWordListWrapper, 'guessed-word-list-section');
      expect(wordList).toHaveLength(1);
    });

    it('has correct number of guessed words', () => {
      const guessedWordNodes = findByTesttAttr(guessedWordListWrapper, 'guessed-word');
      expect(guessedWordNodes).toHaveLength(mockingWordList.length);
    });
  });
});

