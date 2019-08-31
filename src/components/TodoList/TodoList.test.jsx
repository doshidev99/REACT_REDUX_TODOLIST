/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';

describe('TodoList', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TodoList debug />);

    expect(component).toMatchSnapshot();
  });
});
