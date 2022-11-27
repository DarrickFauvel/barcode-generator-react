import React from 'react'

const LocationButtons = ({ state, locations, changeLocation }) => {
  return (
    <section className='location-buttons-section'>
      <div className='location-buttons'>
        {locations.map((location, index) => (
          <button
            className='btn'
            name='location'
            onClick={changeLocation}
            key={index}>
            {location}
          </button>
        ))}
      </div>
    </section>
  )
}

export default LocationButtons
