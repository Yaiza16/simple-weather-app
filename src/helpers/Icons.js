import React from 'react';
import { IconContext } from 'react-icons';
import { IoLocationSharp, IoArrowBackCircleSharp } from 'react-icons/io5';

export const IconLocation = () => (
  <IconContext.Provider value={{ size: '18px', color: '#dadff7' }}>
    <IoLocationSharp />
  </IconContext.Provider>
);

export const IconSearch = () => (
  <IconContext.Provider value={{ size: '16px', color: '#dadff7' }}>
    <IoLocationSharp />
  </IconContext.Provider>
);

export const IconReturn = () => (
  <IconContext.Provider value={{ size: '24px', color: '#dadff7' }}>
    <IoArrowBackCircleSharp />
  </IconContext.Provider>
);
