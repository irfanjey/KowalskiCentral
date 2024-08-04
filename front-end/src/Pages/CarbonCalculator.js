// src/Pages/CarbonCalculator.js
import React, { useState } from 'react';
import InputField from '../Components/InputField';

const emissionFactors = {
  car: 0.24, // kg CO2 per mile
  flight: 0.15, // kg CO2 per km
  energy: 0.45, // kg CO2 per kWh
};

const CarbonCalculator = () => {
  const [carMiles, setCarMiles] = useState('');
  const [flightKm, setFlightKm] = useState('');
  const [energyKWh, setEnergyKWh] = useState('');

  const calculateEmissions = () => {
    const carEmissions = carMiles * emissionFactors.car;
    const flightEmissions = flightKm * emissionFactors.flight;
    const energyEmissions = energyKWh * emissionFactors.energy;

    return carEmissions + flightEmissions + energyEmissions;
  };

  return (
    <div>
      <h1>Carbon Emissions Calculator</h1>
      <InputField
        label="Car travel (miles):"
        value={carMiles}
        onChange={(e) => setCarMiles(e.target.value)}
      />
      <InputField
        label="Flight travel (km):"
        value={flightKm}
        onChange={(e) => setFlightKm(e.target.value)}
      />
      <InputField
        label="Energy usage (kWh):"
        value={energyKWh}
        onChange={(e) => setEnergyKWh(e.target.value)}
      />
      <h2>Total Emissions: {calculateEmissions().toFixed(2)} kg CO2</h2>
    </div>
  );
};

export default CarbonCalculator;
