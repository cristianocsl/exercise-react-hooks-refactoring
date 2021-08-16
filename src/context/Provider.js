// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider ({ children }) {
  
  const [carColor, setCarColor] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const data = { carColor, setCarColor };
  return (
    <CarsContext.Provider value={data}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
