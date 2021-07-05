import React from "react";
import ImageGallery from 'react-image-gallery';
import "./carouselMoradas.css";
import amarelo1 from "../../../assets/moradasSobradosAmarelo/c1.jpg";
import amarelo2 from "../../../assets/moradasSobradosAmarelo/c2.jpg";
import amarelo3 from "../../../assets/moradasSobradosAmarelo/c3.jpg";
import amarelo4 from "../../../assets/moradasSobradosAmarelo/c4.jpg";
import c1thumbs from "../../../assets/moradasSobradosAmarelo/c1Thumbs.jpg";
import c2thumbs from "../../../assets/moradasSobradosAmarelo/c2Thumbs.jpg";
import c3thumbs from "../../../assets/moradasSobradosAmarelo/c3Thumbs.jpg";
import c4thumbs from "../../../assets/moradasSobradosAmarelo/c4Thumbs.jpg";


const SobradosAmareloCarousel = ({ moradas }) => {
  const images = [
    {
      original: amarelo1,
      thumbnail: c1thumbs,
    },
    {
      original: amarelo2,
      thumbnail: c2thumbs,
    },
    {
      original: amarelo3,
      thumbnail: c3thumbs,
    },
    {
      original: amarelo4,
      thumbnail: c4thumbs,
    },
  ];
  

  moradas = images;

  return (
    
    
      <ImageGallery items={moradas} />
    
  )};

export default SobradosAmareloCarousel;
