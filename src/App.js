import React, { useState, useEffect } from 'react';
import CurrentLocation from './components/CurrentLocation';
import LocationsList from './components/LocationsList';
import './App.css'

function App() {
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchISSLocation = async () => {
      try {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await response.json();
        setCurrentLocation(data);
      } catch (error) {
        console.error('Error fetching ISS location:', error);
      }
    };

    fetchISSLocation();

    const interval = setInterval(fetchISSLocation, 2000);

    return () => clearInterval(interval);
  }, []);

  const saveLocation = () => {
    if (currentLocation) {
      setLocations([...locations, currentLocation]);
    }
  };

  const unselectLocation = () => {
    setSelectedLocation(null)
  }

  const deleteLocation = (e,index) => {
    e.stopPropagation()
    const newLocations = locations.filter((_, i) => i !== index);
    setLocations(newLocations);
  };

  const handleLocationSelect = (location) => {
    localStorage.setItem('selectedLocation', JSON.stringify(location));
    setSelectedLocation(location);
  };

  return (
    <div className="app-wrapper">
      <h1>ISS Location Tracker</h1>
      <div className='inner-wrapper'>
      <LocationsList
        locations={locations}
        onDelete={deleteLocation}
        onSelect={handleLocationSelect}
        selectedLocation={selectedLocation}
      />
      <CurrentLocation
        currentLocation={currentLocation}
        saveLocation={saveLocation}
        unselectLocation={unselectLocation}
        selectedLocation={selectedLocation}
      /></div>
    </div>
  );
}

export default App;
