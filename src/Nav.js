import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RB_logo from './RB_logo.png';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='mb-4'>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top shadow ">
        <Link to="/" className="navbar-brand">
          <img src={RB_logo} className="navbar-image" alt='RB Courier Logo' height={35} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/AboutUs" className="nav-link">About Us</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
