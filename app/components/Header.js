import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom'

const Header = ({loading}) => {
  console.log(loading)
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/form">Form</Link>
    </nav>
  );
};

export default Header;
