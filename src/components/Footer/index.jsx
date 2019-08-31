import React, { Fragment } from 'react';
import FilterLink from '../../containers/FilterLink';

export default () => (
  <Fragment>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </Fragment>
);
