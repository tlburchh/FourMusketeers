import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';
import './Nav.css';
import API from '../../utils/API';

class Nav extends React.Component {


  seedDB = () => {
    API.seedDB().then(resp => {
      console.log(`DB seeded: ${resp}`);
    }).catch((err) => {
      console.log(`Error seeding DB: ${err}`);
    });
  }

  render() {

    let greeting;

    if (this.props.user === null) {
      greeting = <p>Hello guest</p>
    } else if (this.props.user.firstName) {
      greeting = (
        <Fragment>
          Welcome back, <strong>{this.props.user.firstName}</strong>
        </Fragment>
      )
    } else if (this.props.user.email) {
      greeting = (
        <Fragment>
          Welcome back, <strong>{this.props.user.email} </strong>
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
            {
              this.props.user.email === 'karstenrabe91@gmail.com' && <div onClick={this.seedDB}>Seed DB</div>
            }
            {greeting} - <Link to="/" className="logout" onClick={this.props.logout}>Logout</Link>
          </div>
        </Col>
      </nav>
    )
  }
};

export default Nav;
