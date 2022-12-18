import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const LocationButtons = ({ changeLocation }) => {
  const { locations } = useContext(AppContext);
  
  const changeLocation = (e) => {
    const { name, textContent } = e.target;

    setState((prevState) => ({ ...prevState, [name]: textContent }));
  };

  return (
    <section className="location-buttons-section">
      <div className="location-buttons">
        {locations.map((location, index) => (
          <button
            className="btn"
            name="location"
            onClick={changeLocation}
            key={index}
          >
            {location}
          </button>
        ))}
      </div>
    </section>
  );
};

export default LocationButtons;
