import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import RB_logo from './RB_logo.png';
import { Link } from "react-router-dom/cjs/react-router-dom.js";

function Nav() {
  return (
    <div>
          <div >
                <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top ">
                    <a class="navbar-brand" href="Home">
                    <Link to="/">  <img src={RB_logo} class="navbar-image " height={35}/></Link>
                     
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav ml-auto">
                      <Link to="/"> <a class="nav-link g" href="#"> Home</a></Link>
                        <a class="nav-link " href="#" >About Us</a>
                        <Link to="/Services"><a class="nav-link " href="#">Services</a></Link>
                        <a class="nav-link " href="#">Pricing</a>
                      </div>
                    </div>
                </nav>
          </div>
    </div>
  );
}

export default Nav;
