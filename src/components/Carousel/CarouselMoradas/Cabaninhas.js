import React from "react";
import ImageGallery from 'react-image-gallery';
import "./carouselMoradas.css";
import F1 from "../../../assets/moradasCabaninhas/f1.jpg";
import F2 from "../../../assets/moradasCabaninhas/f2.jpg";
import F3 from "../../../assets/moradasCabaninhas/f3.jpg";
import F4 from "../../../assets/moradasCabaninhas/f4.jpg";
import F5 from "../../../assets/moradasCabaninhas/f5.jpg";
import F6 from "../../../assets/moradasCabaninhas/f6.jpg";
import F7 from "../../../assets/moradasCabaninhas/f7.jpg";
import F8 from "../../../assets/moradasCabaninhas/f8.jpg";
import F9 from "../../../assets/moradasCabaninhas/f9.jpg";
import F10 from "../../../assets/moradasCabaninhas/f10.jpg";
import F11 from "../../../assets/moradasCabaninhas/f11.jpg";
import F12 from "../../../assets/moradasCabaninhas/f12.jpg";
import F13 from "../../../assets/moradasCabaninhas/f13.jpg";
import F14 from "../../../assets/moradasCabaninhas/f14.jpg";
import F1Thumbs from "../../../assets/moradasCabaninhas/f1Thumbs.jpg";
import F2Thumbs from "../../../assets/moradasCabaninhas/f2Thumbs.jpg";
import F3Thumbs from "../../../assets/moradasCabaninhas/f3Thumbs.jpg";
import F4Thumbs from "../../../assets/moradasCabaninhas/f4Thumbs.jpg";
import F5Thumbs from "../../../assets/moradasCabaninhas/f5Thumbs.jpg";
import F6Thumbs from "../../../assets/moradasCabaninhas/f6Thumbs.jpg";
import F7Thumbs from "../../../assets/moradasCabaninhas/f7Thumbs.jpg";
import F8Thumbs from "../../../assets/moradasCabaninhas/f8Thumbs.jpg";
import F9Thumbs from "../../../assets/moradasCabaninhas/f9Thumbs.jpg";
import F10Thumbs from "../../../assets/moradasCabaninhas/f10Thumbs.jpg";
import F11Thumbs from "../../../assets/moradasCabaninhas/f11Thumbs.jpg";
import F12Thumbs from "../../../assets/moradasCabaninhas/f12Thumbs.jpg";
import F13Thumbs from "../../../assets/moradasCabaninhas/f13Thumbs.jpg";
import F14Thumbs from "../../../assets/moradasCabaninhas/f14Thumbs.jpg";




const SobradosAmareloCarousel = ({ moradas }) => {
  const images = [
    {
      original: F1,
      thumbnail: F1Thumbs,
    },
    {
      original: F2,
      thumbnail: F2Thumbs,
    },
    {
      original: F3,
      thumbnail: F3Thumbs,
    },
    {
      original: F4,
      thumbnail: F4Thumbs,
    },
    {
      original: F5,
      thumbnail: F5Thumbs,
    },
    {
      original: F6,
      thumbnail: F6Thumbs,
    },
    {
      original: F7,
      thumbnail: F7Thumbs,
    },
    {
      original: F8,
      thumbnail: F8Thumbs,
    },
    {
      original: F9,
      thumbnail: F9Thumbs,
    },
    {
      original: F10,
      thumbnail: F10Thumbs,
    },
    {
      original: F11,
      thumbnail: F11Thumbs,
    },
    {
      original: F12,
      thumbnail: F12Thumbs,
    },
    {
      original: F13,
      thumbnail: F13Thumbs,
    },
    {
      original: F14,
      thumbnail: F14Thumbs,
    },
  ];
  

  moradas = images;

  return (
    
    
      <ImageGallery items={moradas} />
    
  )};

export default SobradosAmareloCarousel;
