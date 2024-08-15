import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import delivery_image from './delivery_image.jpg';
import delivery_image2 from './delivery_image2.jpg';
import delivery_image3 from './delivery_image3.jpg';
import delivery_image4 from './delivery_image4.png';

import './Carousel.css'; 

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide ml-5 mr-5 mb-5 light" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>

      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={delivery_image} className="d-block w-100" alt="Packaging and Protection" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-dark'><strong>Packaging and Protection</strong></h5>
            <p className='text-white-50'>Reduce risks with our secure packaging, ensuring your package arrives safely at its destination.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={delivery_image2} className="d-block w-100" alt="Customs Documentation and Compliance" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-dark'><strong>Customs Documentation and Compliance</strong></h5>
            <p className='text-white-50'>Ensure smooth shipping with properly filled out customs forms and compliance with all regulations.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={delivery_image3} className="d-block w-100" alt="Reliable Tracking" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-dark'><strong>Reliable Tracking</strong></h5>
            <p className='text-white-50'>Monitor your package's journey in real-time with our advanced tracking system.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={delivery_image4} className="d-block w-100" alt="Reliable Tracking" />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5 className='text-dark'><strong>Reliable Tracking</strong></h5> */}
            <p className='text-white-50'>Monitor your package's journey in real-time with our advanced tracking system.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      
    </div>
  );
}

export default Carousel;
