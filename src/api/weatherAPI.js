// src/weatherApi.js
export const getWeather = async (city) => {
    const apiKey = 'a06d17722c3f46859f562514252707';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Error fetching weather data:', err);
      return null;
    }
  };
  