import React from "react";
import ImageGallery from 'react-image-gallery';
import "./carouselMoradas.css";
import b1 from "../../../assets/moradasCasaDosFundos/b1.jpg";
import b2 from "../../../assets/moradasCasaDosFundos/b2.jpg";
import b3 from "../../../assets/moradasCasaDosFundos/b3.jpg";
import b4 from "../../../assets/moradasCasaDosFundos/b4.jpg";
import b5 from "../../../assets/moradasCasaDosFundos/b5.jpg";
import b6 from "../../../assets/moradasCasaDosFundos/b6.jpg";
import b7 from "../../../assets/moradasCasaDosFundos/b7.jpg";
import b8 from "../../../assets/moradasCasaDosFundos/b8.jpg";
import b9 from "../../../assets/moradasCasaDosFundos/b9.jpg";
import b10 from "../../../assets/moradasCasaDosFundos/b10.jpg";
import b11 from "../../../assets/moradasCasaDosFundos/b11.jpg";
import b12 from "../../../assets/moradasCasaDosFundos/b12.jpg";
import b13 from "../../../assets/moradasCasaDosFundos/b13.jpg";
import b14 from "../../../assets/moradasCasaDosFundos/b14.jpg";
import b15 from "../../../assets/moradasCasaDosFundos/b15.jpg";
import b16 from "../../../assets/moradasCasaDosFundos/b16.jpg";
import b17 from "../../../assets/moradasCasaDosFundos/b17.jpg";
import b1Thumbs from "../../../assets/moradasCasaDosFundos/b1Thumbs.jpg";
import b2Thumbs from "../../../assets/moradasCasaDosFundos/b2Thumbs.jpg";
import b3Thumbs from "../../../assets/moradasCasaDosFundos/b3Thumbs.jpg";
import b4Thumbs from "../../../assets/moradasCasaDosFundos/b4Thumbs.jpg";
import b5Thumbs from "../../../assets/moradasCasaDosFundos/b5Thumbs.jpg";
import b6Thumbs from "../../../assets/moradasCasaDosFundos/b6Thumbs.jpg";
import b7Thumbs from "../../../assets/moradasCasaDosFundos/b7Thumbs.jpg";
import b8Thumbs from "../../../assets/moradasCasaDosFundos/b8Thumbs.jpg";
import b9Thumbs from "../../../assets/moradasCasaDosFundos/b9Thumbs.jpg";
import b10Thumbs from "../../../assets/moradasCasaDosFundos/b10Thumbs.jpg";
import b11Thumbs from "../../../assets/moradasCasaDosFundos/b11Thumbs.jpg";
import b12Thumbs from "../../../assets/moradasCasaDosFundos/b12Thumbs.jpg";
import b13Thumbs from "../../../assets/moradasCasaDosFundos/b13Thumbs.jpg";
import b14Thumbs from "../../../assets/moradasCasaDosFundos/b14Thumbs.jpg";
import b15Thumbs from "../../../assets/moradasCasaDosFundos/b15Thumbs.jpg";
import b16Thumbs from "../../../assets/moradasCasaDosFundos/b16Thumbs.jpg";
import b17Thumbs from "../../../assets/moradasCasaDosFundos/b17Thumbs.jpg";

const CasaDosFundos = ({ moradas }) => {
  const images = [
    {
      original: b1,
      thumbnail: b1Thumbs,
    },
    {
      original: b2,
      thumbnail: b2Thumbs,
    },
    {
      original: b3,
      thumbnail: b3Thumbs,
    },
    {
      original: b4,
      thumbnail: b4Thumbs,
    },
    {
      original: b5,
      thumbnail: b5Thumbs,
    },
    {
      original: b6,
      thumbnail: b6Thumbs,
    },
    {
      original: b7,
      thumbnail: b7Thumbs,
    },
    {
      original: b8,
      thumbnail: b8Thumbs,
    },
    {
      original: b9,
      thumbnail: b9Thumbs,
    },
    {
      original: b10,
      thumbnail: b10Thumbs,
    },
    {
      original: b11,
      thumbnail: b11Thumbs,
    },
    {
      original: b12,
      thumbnail: b12Thumbs,
    },
    {
      original: b13,
      thumbnail: b13Thumbs,
    },
    {
      original: b14,
      thumbnail: b14Thumbs,
    },
    {
      original: b15,
      thumbnail: b15Thumbs,
    },
    {
      original: b16,
      thumbnail: b16Thumbs,
    },
    {
      original: b17,
      thumbnail: b17Thumbs,
    },
    
  ];
  

  moradas = images;

  return (
    
    
      <ImageGallery items={moradas} />
    
  )};

export default CasaDosFundos;
