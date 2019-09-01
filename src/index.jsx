import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Wrapper from './style';
import Menu from './components/Menu';

const App = () => {
  useEffect(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      setTimeout(() => {
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        ele.outerHTML = '';
      }, 1500);
    }
  }, []);
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
