import React from 'react';
import formatTimestamp from '../../utils/dateFromatter'

import './style.css'

const LocationItem = ({ location, onDelete, onSelect, isSelected }) => {
  return (
    <div className={`${!isSelected?'item-wrapper':'selected-item'}`} onClick={onSelect}>
      <div>Latitude: {location.iss_position.latitude}</div>
      <div>Longitude: {location.iss_position.longitude}</div>
<div>Time:{formatTimestamp(location.timestamp)}</div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default LocationItem;
