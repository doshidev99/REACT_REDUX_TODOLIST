import React from 'react';
import { shallow } from 'enzyme';
import EditTodo from './index';

describe('EditTodo', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<EditTodo debug />);

    expect(component).toMatchSnapshot();
  });
});
