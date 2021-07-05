import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Minilofts Pé Grande',
    path: '/moradas/peGrande',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
  {
    title: 'Casa dos Fundos',
    path: '/moradas/casaDosFundos',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
  {
    title: 'Sobrados Amarelo',
    path: '/moradas/sobradosAmarelo',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
  {
    title: 'Cabaninhas',
    path: '/moradas/cabaninhas',
    icon: <GiIcons.GiFootprint />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Pé Grande nas Montanhas!',
  //   path: '/moradas/montanhas',
  //   icon: <GiIcons.GiMountains />,
  //   cName: 'nav-text'
  // },
]
