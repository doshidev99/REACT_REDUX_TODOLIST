import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import Footer from '../Footer';

const Menu = () => {
  return (
    <Fragment>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Fragment>
  );
};

export default Menu;
