// src/Cars.jsx

import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars () {
  const { carColor, carColor: {redCar, blueCar, yellowCar} , setCarColor } = useContext(CarsContext);
  return (
    <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button

          onClick={() => setCarColor({...carColor, redCar: !redCar})}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => setCarColor({...carColor, blueCar: !blueCar})}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => setCarColor({...carColor, yelllowCar: !yellowCar})}
          type="button"
        >
          Move
      </button>
      </div>
    </div>
  )
};

export default Cars;
