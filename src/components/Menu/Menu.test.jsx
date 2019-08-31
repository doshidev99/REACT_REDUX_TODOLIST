/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { shallow } from 'enzyme';
import Menu from './index';

describe('Menu', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Menu debug />);

    expect(component).toMatchSnapshot();
  });
});
