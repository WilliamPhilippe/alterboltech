import React from 'react';

import PropTypes from 'prop-types';

import { NavContent } from './styles';


function NavContainer() {
  return (
    <NavContent>
      <div className="left">
        <h4>TODO List</h4>
      </div>
      <div className="right">
        <h4>Oliveira</h4>
        <button>Logout</button>
      </div>
    </NavContent>
  );
}

NavContainer.propTypes = {};

export default NavContainer;
