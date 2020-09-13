import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GuessedWordList, { GuessedWordListProps } from './GuessedWordList';
import { findByTesttAttr } from '../../../test/test-utils';

describe('<Congrats />', () => {
  let guessedWordListWrapper: ShallowWrapper;
  let defaultProps: GuessedWordListProps = {
    guessedWords: [],
  };

  beforeEach(() => {
    guessedWordListWrapper = shallow(<GuessedWordList {...defaultProps} />);
  });

  it('render component', () => {
    expect(guessedWordListWrapper).toMatchSnapshot();
    const containerComponent = findByTesttAttr(guessedWordListWrapper, 'component-guessed-word-list');
    expect(containerComponent).toHaveLength(1);
  });

})

