import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GuessedWordList, { GuessedWordListProps } from './GuessedWordList';
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

    it('render the component without error', () => {
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
    beforeEach(() => {
      guessedWordListWrapper.setProps({
        guessedWords: [
          { guessedWord: 'qwerty', letterMatchCount: 3 },
          { guessedWord: 'asdfgh', letterMatchCount: 1 },
          { guessedWord: 'inquiry', letterMatchCount: 7 },
        ]
      });
    });

    it('render the component without error', () => {
      expect(guessedWordListWrapper).toMatchSnapshot();
      const containerComponent = findByTesttAttr(guessedWordListWrapper, 'component-guessed-word-list');
      expect(containerComponent).toHaveLength(1);
    });
  });


});

