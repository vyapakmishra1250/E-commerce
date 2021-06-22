import React from 'react';
import { Carousel } from 'react-bootstrap';
//import img1 from '../images/images/1.jpg';
// import img2 from '../images/images/2.jpg';
// import img3 from '../images/images/3.jpg';
import '../Styles/Craousel.css';

const CarouselConatiner = () =>{
    return(<>
        <Carousel className="main_carousel">
  <Carousel.Item className="main_cra">
    <img className="inside_carousel" src="https://rukminim1.flixcart.com/flap/1688/500/image/d2daad940fa0385a.jpg?q=50"  alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item className="main_cra">
    <img className="inside_carousel " src="https://rukminim1.flixcart.com/flap/1680/500/image/0c7e8d5822e2929e.jpg?q=50" alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item className="main_cra">
    <img className="inside_carousel"src="https://rukminim1.flixcart.com/flap/1688/500/image/2c663a8143506486.jpg?q=50" alt="Third slide" />
  </Carousel.Item>
</Carousel>
    </>);
};

export default CarouselConatiner;