import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';
import './Nav.css';

const Nav = (props) => {
  let greeting;

  if (props.user === null) {
    greeting = <p>Hello guest</p>
  } else if (props.user.firstName) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.firstName}</strong>
      </Fragment>
    )
  } else if (props.user.email) {
    greeting = (
      <Fragment>
        Welcome back, <strong>{props.user.email} </strong>
      </Fragment>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Col size="md-2">
        <Link to="/" className="navbar-brand">Starrlight Mead</Link>
      </Col>
      <Col size="md-7"></Col>
      <Col size="md-3">
        <div className="float-right">
          {greeting} - <Link to="/" className="logout" onClick={props.logout}>Logout</Link>
        </div>
      </Col>
    </nav>
  )
};

export default Nav;
