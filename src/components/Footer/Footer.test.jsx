import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Footer', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer debug />);

    expect(component).toMatchSnapshot();
  });
});
