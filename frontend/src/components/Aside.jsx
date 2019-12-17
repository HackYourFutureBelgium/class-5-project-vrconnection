import React from 'react';
import { Carousel } from 'react-bootstrap';
import refugeeCamp0 from '../assets/images/refugees-volunteers1.jpg';
import refugeeCamp1 from '../assets/images/refugees-volunteers2.jpg';
import refugeeCamp2 from '../assets/images/refugees-volunteers3.jpg';

const Aside = () => (
  <Carousel
    indicators="false"
    style={{
      marginRight: '8%',
    }}
  >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={refugeeCamp1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="text-light bg-dark">You can make a difference</h3>
        <p className="p-3 mb-2 bg-info text-white">Remember that the happiest people are not those getting more, but those giving more. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={refugeeCamp0}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 className="text-light bg-dark">What is the essence of life? </h3>
        <p className="p-3 mb-2 bg-info text-white">Help to others.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={refugeeCamp2}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 className="text-light bg-dark">John Holmes</h3>
        <p className="p-3 mb-2 bg-info text-white">There is no exercise better for the heart than reaching down and lifting people up</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Aside;
