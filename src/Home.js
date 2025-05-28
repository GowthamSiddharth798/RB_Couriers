import React from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import Logo from './Logo';
import Call from './call';
import './Home.css';
import './Footer.css';

const Footer = () => (
  <footer className="footer mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>About Us</h5>
          <p>RB Couriers offers fast, secure, and reliable courier services across the globe. Our mission is to deliver excellence with every parcel.</p>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#track">Track</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <p>Email: support@rbcouriers.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Hyderabad, India</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2025 RB Couriers. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Home = () => {
  return (
    <>
      <Nav />
      <div className='bg-light'>
        <div className="container home m-auto">
          {/* Hero Section */}
          <div className="row hero align-items-center">
            <div className="col-md-6 hero-text">
              <h1 className="display-4">Fast, Reliable, and Secure Courier Services</h1>
              <p className="lead">Delivering your packages safely and on time, with the utmost care and efficiency.</p>
              <a href="#track" className="btn btn-danger btn-lg mb-4">Track Your Shipment</a>
            </div>
            <div className="col-md-6 hero-image">
              <Logo />
            </div>
          </div>

          {/* Features Section */}
          <div className="row features text-center">
            <div className="col-md-4">
              <div className="feature-box fast">
                <i className="fas fa-shipping-fast fa-3x mb-3"></i>
                <h3>Fast Delivery</h3>
                <p>Expedited shipping to ensure swift delivery without delays.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box secure">
                <i className="fas fa-shield-alt fa-3x mb-3"></i>
                <h3>Secure Shipping</h3>
                <p>Advanced security and careful handling from pickup to delivery.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box punctual">
                <i className="fas fa-clock fa-3x mb-3"></i>
                <h3>On-Time Guarantee</h3>
                <p>Precise logistics to ensure punctual deliveries every time.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="row cta align-items-center my-5">
            <div className="col-md-8">
              <h2 className="cta-text">Ready to experience premium courier service?</h2>
            </div>
            <div className="col-md-4 text-md-right text-center">
              <a href="#services" className="btn btn-outline-primary btn-lg">Book Now</a>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
      <Call />
      <Footer />
    </>
  );
};

export default Home;