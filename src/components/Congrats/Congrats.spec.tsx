import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';

it('renders the component', () => {
  const component = shallow(<Congrats />);
  expect(component).toMatchSnapshot();
});
