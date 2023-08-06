import React from 'react';
import LocationItem from '../LocationItem';
import './style.css'

const LocationsList = ({ locations, onDelete, onSelect,selectedLocation }) => {
  return (
    <div className='list-wrapper'>
      <h2>Saved Locations</h2>
        {locations.map((location, index) => (
          <LocationItem
            key={Date.now()*Math.random()}
            location={location}
            onDelete={(e) => onDelete(e,index)}
            onSelect={() => onSelect(location)}
            isSelected={location === selectedLocation}
          />
        ))}
    </div>
  );
};

export default LocationsList;
