import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/hotels');
      setHotels(response.data);
    } catch (error) {
      setError('Hiba történt a hotelek lekérése közben.');
    }
  };

  return (
    <div>
      <h1>Hotelek</h1>
      {error && <p>{error}</p>}
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id}>{hotel.name} - ${hotel.pricePerNightInUSD} per night</li>
        ))}
      </ul>
    </div>
  );
}

export default Hotels;