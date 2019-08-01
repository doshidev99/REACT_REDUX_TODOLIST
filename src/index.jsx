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
        // fade out
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = '';
      }, 1500);
    }
  }, []);
  return (
    <Wrapper>
      <h1 className="title"> Hello </h1>
      <Menu />
    </Wrapper>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);