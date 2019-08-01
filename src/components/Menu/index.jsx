import React, { Fragment } from 'react';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import Footer from '../Footer';

const Menu = () => (
  <Fragment>
    Hello
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Fragment>
);

export default Menu;
