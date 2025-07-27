import { useState } from 'react';
import { getWeather } from './api/weatherAPI';
import './weather.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (!city.trim()) {
      alert('Please enter a city name');
      setCity(''); // Clear input after alert
      return;
    }

    try {
      const data = await getWeather(city);

      if (!data || !data.location) {
        alert('City not found. Please enter a valid city name.');
        setCity(''); // Clear input after alert
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch (error) {
      alert('Error fetching weather data. Please try again later.');
      setCity(''); // Clear input after alert
      setWeather(null);
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Get Weather</button>
      </div>

      {weather && weather.location && (
        <div className="weather-info">
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>{weather.current.condition.text}</p>
          <p>🌡 {weather.current.temp_c}°C</p>
          <img src={weather.current.condition.icon} alt="weather-icon" />
        </div>
      )}
    </div>
  );
}

export default App;