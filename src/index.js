import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Wrapper from './style';
import Menu from './components/Menu';

render(
  <Provider store={store}>
    <Wrapper>
      <h1 className="title"> Hello </h1>
      <Menu />
    </Wrapper>
  </Provider>,
  document.getElementById('root')
);
