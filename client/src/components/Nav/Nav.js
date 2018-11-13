import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';
import './Nav.css';
import API from '../../utils/API';
import AdminButton from '../../components/AdminButton/AdminButton';

class Nav extends React.Component {


  seedDB = () => {
    API.seedDB().then(resp => {
      console.log(`DB seeded: ${resp}`);
    }).catch((err) => {
      console.log(`Error seeding DB: ${err}`);
    });
  }

  render() {

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
          <h3>Welcome back, <strong>{props.user.email} </strong></h3>
        </Fragment>
      )
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Col size="md-2">
          <Link to="/" className="navbar-brand"><h1>Starrlight Mead</h1></Link>
          {
            props.user.isAdmin && <AdminButton />
          }
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

}
export default Nav;
