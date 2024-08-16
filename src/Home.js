import React from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import './Home.css'; // Add your CSS styles here
import Logo from './Logo';
import delivery_image5 from './assets/images/delivery_image5.jpg';

function Home() {
  return (
    <>
      <Nav />
      <div>
          <div className="container home m-auto">
            {/* Hero Section */}
            <div className="row hero align-items-center">
              <div className="col-md-6 hero-text">
                <h1 className="display-4">Fast, Reliable, and Secure Courier Services</h1>
                <p className="lead">Delivering your packages safely and on time, with the utmost care and efficiency.</p>
                <a href="#track" className="btn btn-primary btn-lg mb-4">Track Your Shipment</a>
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
                  <p>Our expedited shipping options ensure that your packages reach their destination swiftly, with no unnecessary delays.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box">
                  <i className="fas fa-shield-alt fa-3x mb-3"></i>
                  <h3>Secure Shipping</h3>
                  <p>Your packages are protected at every step, from pickup to delivery, with our state-of-the-art security measures and careful handling.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-box">
                  <i className="fas fa-clock fa-3x mb-3"></i>
                  <h3>On-Time Delivery</h3>
                  <p>With our precise logistics and commitment to punctuality, we guarantee that your deliveries will always arrive right on schedule.</p>
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="row cta align-items-center my-5">
              <div className="col-md-8">
                <h2 className="cta-text">Ready to experience the best courier service?</h2>
              </div>
              <div className="col-md-4 text-md-right text-center">
                <a href="#services" className="btn btn-outline-primary btn-lg">Book Your Courier</a>
              </div>
            </div>
          </div>
      </div>
      <Carousel />
    </>
  );
}

export default Home;
