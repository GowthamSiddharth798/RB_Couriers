import React from 'react';
import Nav from './Nav';
import './Services.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import delivery_image5 from './assets/images/delivery_image5.jpg';

const Services = () => {
  return (
    <>
        <Nav/>
        <div className="container m-auto">
            <h2>Our Services</h2>
            <div className="row">
                <div className="col-md-6 section">
                <div className="service-box">
                    <h3>Packaging and Protection</h3>
                    <ul>
                        <li><strong>Durable Packaging</strong>: We use only the best, high-quality packaging materials to safeguard your items during transit.</li>
                        <li><strong>Secure Sealing</strong>: Every package is securely sealed using strong tape, including tamper-evident options.</li>
                        {/* <li><strong>Clear Labeling</strong>: We take care of all labeling to ensure safe handling.</li> */}
                        <li><strong>Customized Packaging Solutions</strong>: We offer tailored packaging for fragile or unique items, ensuring they receive the protection they need during transit.</li>
                        </ul>
                </div>
                </div>
                <div className="col-md-6 section">
                    <div className="service-box">
                        <h3>Security Measures</h3>
                        <ul>
                        <li><strong>Tamper-Proof Packaging</strong>: Our reliable tamper-proof seals keep your items safe, secure, and protected during transit.</li>
                            <li><strong>Real-Time Tracking</strong>: Easily track your shipment in real-time with RB Couriers' advanced tracking system.</li>
                            <li><strong>Compliance with Regulations</strong>: We meticulously ensure your package meets all required laws and regulations, minimizing the risk of delays.</li>
                            </ul>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="service-box">
                        <h3>Risk Management</h3>
                        <ul>
                            <li><strong>Comprehensive Planning</strong>: We are prepared for any disruptions to ensure your package arrives safely.</li>
                            <li><strong>Customs Expertise</strong>: Our team helps your package clear customs quickly and safely.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="service-box">
                        <h3>Courier Selection</h3>
                        <ul>
                            <li><strong>Reliable and Reputable</strong>: RB Couriers is known for safety and reliability.</li>
                            <li><strong>Global Partnerships</strong>: Strong partnerships with local carriers worldwide ensure your package is in good hands.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Services;
