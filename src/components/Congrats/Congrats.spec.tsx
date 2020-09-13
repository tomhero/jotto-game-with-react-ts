import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Congrats, { CongratsProps } from './Congrats';
import { findByTesttAttr } from '../../../test/test-utils';

describe('<Congrats />', () => {
  let congratsWrapper: ShallowWrapper;
  let defaultProps: CongratsProps = {
    isSuccess: false,
  };

  beforeEach(() => {
    congratsWrapper = shallow(<Congrats {...defaultProps} />);
  });

  it('renders the component', () => {
    expect(congratsWrapper).toMatchSnapshot();
    const containerComponent = findByTesttAttr(congratsWrapper, 'component-congrats');
    expect(containerComponent).toHaveLength(1);
  });

  it('reders no text when `isSuccess` prop is false', () => {
    congratsWrapper.setProps({ isSuccess: false });
    const component = findByTesttAttr(congratsWrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });

  it('render non-empty congrates message when `isSuccess` props is true', () => {
    congratsWrapper.setProps({ isSuccess: true });
    const component = findByTesttAttr(congratsWrapper, 'component-congrats');
    expect(component.text()).not.toBe('');
  });

})

