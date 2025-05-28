import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import RB_logo from './RB_logo.png';
import JB_logo2 from './JB_logo2.png';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='mb-4'>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top shadow ">
        <Link to="/" className="navbar-brand">
          <img src={JB_logo2} className="navbar-image" alt='JW Courier Logo' height={56}  />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-link bold">Home</Link>
            <Link to="/AboutUs" className="nav-link">About Us</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/Contact us" className="nav-link">Contact Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
