import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion';
import './About.css'
import delivery_image4 from './delivery_image4.png';

const About = () => {
  return (
    <>
       <Nav/>
       <div className="App">
      <header className="App-header">
        <motion.h1 
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
          About Us
        </motion.h1>

        <motion.div 
          className="container"
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1.5 }}>
          <h2>Fast and Secure Courier Services in Hyderabad</h2>
          <p>
            <strong>RB Express</strong> is a premier courier service provider headquartered in Hyderabad, India. 
            We specialize in offering reliable and efficient delivery solutions tailored for individuals and businesses alike.
          </p>
          <p>
            Whether you're sending important documents, parcels, or even larger items, RB Express ensures safe, timely, 
            and secure deliveries.
          </p>
        </motion.div>

        <motion.div 
          className="services"
          initial={{ x: '-100vw' }} 
          animate={{ x: 0 }} 
          transition={{ type: 'spring', stiffness: 50, delay: 1 }}>
         {/* <div className="d-flex flex-column flex-md-row align-items-center"> */}
  <div className="text-center text-md-left mb-4 mb-md-0">
    <h3>Our Commitment</h3>
    <ul className="list-unstyled">
      <li>Same-Day Delivery</li>
      <li>Next-Day Delivery</li>
      <li>Express Delivery</li>
      <li>Advanced Tracking System</li>
    </ul>
  </div>
  <div className="d-flex justify-content-center justify-content-md-start flex-grow-1">
                <img 
                  src={delivery_image4} 
                  alt="Delivery" 
                  className="img-fluid rounded shadow-lg" 
                />
                </div>

        </motion.div>

        <motion.div 
          className="cta"
          initial={{ y: '100vh' }} 
          animate={{ y: 0 }} 
          transition={{ type: 'spring', stiffness: 80, delay: 1.5 }}>
          <h3>Let's Talk</h3>
          <p>Need assistance with your delivery? Have a question? We're here to help.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="contact-button"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </header>
       </div>
      
    </>
  )
}

export default About;