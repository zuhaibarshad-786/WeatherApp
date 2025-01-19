import React, { useEffect, useState } from 'react';

function Weather({ city }) {  // Accept city as a prop
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '2481b3b764f24cf7bc450556240511'; 

  const fetchWeather = async () => {
    setError(null); // Clear any previous errors

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data); // Update the state with fetched data
    } catch (err) {
      setError(err.message);
    }
  };

  // Trigger the fetchWeather when city changes
  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <h3>Weather in {weatherData.location.name}</h3>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
        </div>
      )}
    </div>
  );
}

export default Weather;



