import React from 'react';
import { Carousel } from 'react-bootstrap';
import refugeeCamp0 from '../assets/images/refugee.jpg';
import refugeeCamp1 from '../assets/images/refugee_camp_0.jpg';
import refugeeCamp2 from '../assets/images/refugee_camp_1.jpg';

const Aside = () => (
  <Carousel indicators="false">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={refugeeCamp1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>You can make a difference</h3>
        <p>Remember that the happiest people are not those getting more, but those giving more. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={refugeeCamp0}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>What is the essence of life? </h3>
        <p>To serve others and to do good.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={refugeeCamp2}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>John Holmes</h3>
        <p>There is no exercise better for the heart than reaching down and lifting people up</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Aside;
