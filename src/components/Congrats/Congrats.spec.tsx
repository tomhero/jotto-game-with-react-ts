import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Congrats, { CongratsProps } from './Congrats';
import { findByTesttAttr } from '../../../test/test-utils';

describe('<Congrats />', () => {
  let congratsWrapper: ShallowWrapper;
  let defaultProps: CongratsProps = {
  };

  beforeEach(() => {
    congratsWrapper = shallow(<Congrats {...defaultProps} />);
  });

  it('renders the component', () => {
    expect(congratsWrapper).toMatchSnapshot();
    const containerComponent = findByTesttAttr(congratsWrapper, 'component-congrats');
    expect(containerComponent).toHaveLength(1);
  });

})

