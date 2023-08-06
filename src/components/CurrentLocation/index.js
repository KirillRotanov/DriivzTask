import React from 'react';
import formatTimestamp from '../../utils/dateFromatter'
import './style.css'

const CurrentLocation = ({ currentLocation, unselectLocation, saveLocation, selectedLocation }) => {
  return (
    <div className='location-wrapper'>
      {selectedLocation ? (
        <>
          <h1>Saved ISS Location:</h1>
        <p>
          Latitude: {selectedLocation.iss_position.latitude}, Longitude: {selectedLocation.iss_position.longitude}
          </p>
          <p>Time: {formatTimestamp(selectedLocation.timestamp)}</p>
          <button onClick={unselectLocation}>Cancel</button>
          </>
      ) : (
          currentLocation ? (
          <>
          <h1>Current ISS Location:</h1>
          <p>
            Latitude: {currentLocation.iss_position.latitude}, Longitude: {currentLocation.iss_position.longitude}
              </p>
              <p>Time: {formatTimestamp(currentLocation.timestamp)}</p>
            <button className='save-btn' onClick={saveLocation}>+</button>
          </>
        ) : (
          <p>Loading...</p>
        )
      )}
    </div>
  );
};

export default CurrentLocation;
