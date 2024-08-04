import React, { useState } from "react";
import "./CarbonCalculator.css";
import InputField from "../Components/InputField";

const emissionFactors = {
  car: 0.24, // kg CO2 per mile
  flight: 0.15, // kg CO2 per km
  energy: 0.45, // kg CO2 per kWh
};

const CarbonCalculator = () => {
  const [carMiles, setCarMiles] = useState("");
  const [flightKm, setFlightKm] = useState("");
  const [energyKWh, setEnergyKWh] = useState("");

  const calculateEmissions = () => {
    const carEmissions = carMiles * emissionFactors.car;
    const flightEmissions = flightKm * emissionFactors.flight;
    const energyEmissions = energyKWh * emissionFactors.energy;

    return carEmissions + flightEmissions + energyEmissions;
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Carbon Emissions Calculator</h1>
      <div className="input-field">
        <label className="input-label">Car travel (miles):</label>
        <input
          type="number"
          value={carMiles}
          onChange={(e) => setCarMiles(e.target.value)}
          className="input-input"
        />
      </div>
      <div className="input-field">
        <label className="input-label">Flight travel (km):</label>
        <input
          type="number"
          value={flightKm}
          onChange={(e) => setFlightKm(e.target.value)}
          className="input-input"
        />
      </div>
      <div className="input-field">
        <label className="input-label">Energy usage (kWh):</label>
        <input
          type="number"
          value={energyKWh}
          onChange={(e) => setEnergyKWh(e.target.value)}
          className="input-input"
        />
      </div>
      <h2 className="total-emissions">
        Total Emissions: {calculateEmissions().toFixed(2)} kg CO2
      </h2>
    </div>
  );
};

export default CarbonCalculator;
