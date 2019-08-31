/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { shallow } from 'enzyme';
import Link from './index';

describe('Link', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Link debug />);

    expect(component).toMatchSnapshot();
  });
});
