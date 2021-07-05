import React from "react";
import { Carousel } from "react-responsive-carousel";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";


const DemoCarousel = ({}) => {
  return (
    <div className="container">
      <Carousel autoPlay infiniteLoop transitionTime="1000" interval="4000" >
        <div className="containerCarousel">
          <img alt="" src={s1} />
          {/* <p className="legend dub">Legend 1</p> */}
        </div>
        <div className="containerCarousel">
          <img alt="" src={s2} />
          {/* <p className="legend dub">Legend 2</p> */}
        </div>
        <div className="containerCarousel">
          <img alt="" src={s3} />
          {/* <p className="legend dub">Legend 3</p> */}
        </div>
    </Carousel>
    </div>
  )};

export default DemoCarousel;
