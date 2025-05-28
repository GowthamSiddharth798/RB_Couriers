import React from 'react';
import Nav from './Nav';
import { motion } from 'framer-motion';
import './About.css';
import delivery_image4 from './delivery_image4.png';

const About = () => {
  return (
    <>
      <Nav />
      <section className="about-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center fw-bold display-5 mb-4"
        >
          About Us
        </motion.h1>

        <motion.div
          className="about-content container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-semibold mb-3">Fast & Reliable Courier Services in Hyderabad</h2>
              <p className="text-muted">
                <strong>Jetway Express</strong> is a top-tier courier service company based in Hyderabad. We offer secure, fast, and
                customer-centric delivery services for both individuals and enterprises.
              </p>
              <p className="text-muted">
                From essential documents to larger parcels, <strong>Jetway Express</strong> guarantees safety, speed, and complete transparency
                in every shipment.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src={delivery_image4} alt="Delivery Service" className="img-fluid rounded shadow-sm" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="services-list container mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h3 className="fw-semibold mb-3 text-center">Our Services</h3>
          <ul className="list-group list-group-flush text-start mx-auto" style={{ maxWidth: '500px' }}>
            <li className="list-group-item">Same-Day Delivery</li>
            <li className="list-group-item">Next-Day Delivery</li>
            <li className="list-group-item">Express & Priority Shipping</li>
            <li className="list-group-item">Live Tracking System</li>
          </ul>
        </motion.div>

        <motion.div
          className="cta-box text-center mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h4 className="fw-bold">Need Expert Delivery Solutions?</h4>
          <p className="text-muted mb-3">We're always here to answer your questions and help your logistics run smoothly.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-4 py-2"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default About;