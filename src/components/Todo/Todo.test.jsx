/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { shallow } from 'enzyme';
import Todo from './index';

describe('Todo', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Todo debug />);

    expect(component).toMatchSnapshot();
  });
});
