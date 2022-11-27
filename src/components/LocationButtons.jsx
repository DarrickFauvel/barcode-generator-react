import React from 'react'

const LocationButtons = ({ state, changeLocation }) => {
  const locations = ['01A', '99A', 'SHP', 'MC']

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
