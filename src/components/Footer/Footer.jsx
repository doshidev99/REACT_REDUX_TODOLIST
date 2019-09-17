import React, { Fragment } from 'react';
import Link from '../../containers/Link';

export default () => (
  <Fragment>
    <Link filter="SHOW_ALL" href="todo">
      All
    </Link>
    <Link filter="SHOW_ACTIVE" href="todo">
      Active
    </Link>
    <Link filter="SHOW_COMPLETED" href="todo">
      Completed
    </Link>
  </Fragment>
);
