import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTesttAttr } from '../../../test/test-utils';
import Input, { InputProps } from './Input';

describe('<Input />', () => {
  let inputWrapper: ShallowWrapper;
  const defaultProps: InputProps = {
    secretWord: '',
  };

  beforeEach(() => {
    inputWrapper = shallow(<Input {...defaultProps} />);
  });

  it('render without error', () => {
    const inputComponent = findByTesttAttr(inputWrapper, 'component-input');
    expect(inputComponent).toHaveLength(1);
  });

  describe('state controlled input field', () => {
    it('updates with value of input box upon change', () => {
      // NOTE : How to mock useState
      const mockSetCurrentGuess = jest.fn();
      React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

      // NOTE : Simulate input event
      const inputBox = findByTesttAttr(inputWrapper, 'input-box');
      const mockEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    afterEach(() => {
      jest.resetAllMocks();
    })
  })

});
