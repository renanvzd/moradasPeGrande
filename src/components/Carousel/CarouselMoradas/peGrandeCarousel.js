import React from "react";
import ImageGallery from 'react-image-gallery';
import "./carouselMoradas.css";
import a1 from "../../../assets/moradasPeGrande/a1.jpg";
import a2 from "../../../assets/moradasPeGrande/a2.jpg";
import a3 from "../../../assets/moradasPeGrande/a3.jpg";
import a4 from "../../../assets/moradasPeGrande/a4.jpg";
import a5 from "../../../assets/moradasPeGrande/a5.jpg";
import a6 from "../../../assets/moradasPeGrande/a6.jpg";
import a7 from "../../../assets/moradasPeGrande/a7.jpg";
import a8 from "../../../assets/moradasPeGrande/a8.jpg";
import a9 from "../../../assets/moradasPeGrande/a9.jpg";
import a10 from "../../../assets/moradasPeGrande/a10.jpg";
import a11 from "../../../assets/moradasPeGrande/a11.jpg";
import a12 from "../../../assets/moradasPeGrande/a12.jpg";
import a13 from "../../../assets/moradasPeGrande/a13.jpg";
import a14 from "../../../assets/moradasPeGrande/a14.jpg";
import a1Thumbs from "../../../assets/moradasPeGrande/a1Thumbs.jpg";
import a2Thumbs from "../../../assets/moradasPeGrande/a2Thumbs.jpg";
import a3Thumbs from "../../../assets/moradasPeGrande/a3Thumbs.jpg";
import a4Thumbs from "../../../assets/moradasPeGrande/a4Thumbs.jpg";
import a5Thumbs from "../../../assets/moradasPeGrande/a5Thumbs.jpg";
import a6Thumbs from "../../../assets/moradasPeGrande/a6Thumbs.jpg";
import a7Thumbs from "../../../assets/moradasPeGrande/a7Thumbs.jpg";
import a8Thumbs from "../../../assets/moradasPeGrande/a8Thumbs.jpg";
import a9Thumbs from "../../../assets/moradasPeGrande/a9Thumbs.jpg";
import a10Thumbs from "../../../assets/moradasPeGrande/a10Thumbs.jpg";
import a11Thumbs from "../../../assets/moradasPeGrande/a11Thumbs.jpg";
import a12Thumbs from "../../../assets/moradasPeGrande/a12Thumbs.jpg";
import a13Thumbs from "../../../assets/moradasPeGrande/a13Thumbs.jpg";
import a14Thumbs from "../../../assets/moradasPeGrande/a14Thumbs.jpg";

const peGrandeCarousel = ({ moradas }) => {
  const images = [
    {
      original: a1,
      thumbnail: a1Thumbs,
    },
    {
      original: a2,
      thumbnail: a2Thumbs,
    },
    {
      original: a3,
      thumbnail: a3Thumbs,
    },
    {
      original: a4,
      thumbnail: a4Thumbs,
    },
    {
      original: a5,
      thumbnail: a5Thumbs,
    },
    {
      original: a6,
      thumbnail: a6Thumbs,
    },
    {
      original: a7,
      thumbnail: a7Thumbs,
    },
    {
      original: a8,
      thumbnail: a8Thumbs,
    },
    {
      original: a9,
      thumbnail: a9Thumbs,
    },
    {
      original: a10,
      thumbnail: a10Thumbs,
    },
    {
      original: a11,
      thumbnail: a11Thumbs,
    },
    {
      original: a12,
      thumbnail: a12Thumbs,
    },
    {
      original: a13,
      thumbnail: a13Thumbs,
    },
    {
      original: a14,
      thumbnail: a14Thumbs,
    },
    
  ];
  

  moradas = images;

  return (
    
    
      <ImageGallery items={moradas} />
    
  )};

export default peGrandeCarousel;
