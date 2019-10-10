import React, { Fragment } from 'react';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import Footer from '../Footer';
import Header from '../Header';

const Menu = () => {
  return (
    <Fragment>
      <Header />
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Fragment>
  );
};

export default Menu;
