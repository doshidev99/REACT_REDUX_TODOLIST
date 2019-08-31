import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <button type="button" onClick={onClick} disabled={active}>
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.element,
  onClick: PropTypes.func
};

Link.defaultProps = {
  active: false,
  children: null,
  onClick: () => {}
};

export default Link;
