# Weather App

This is a simple weather application built with **React.js**. It allows users to enter a city name and get the current weather information for that location.

---

## Features

- Search weather by city name
- Displays:
  - City & country
  - Weather condition
  - Temperature in °C
  - Weather icon
- Shows error message if:
  - City name is empty
  - Invalid city is entered

---

## Technologies Used

- React.js
- JavaScript
- Weather API (like WeatherAPI.com)
- CSS for styling

---

##  How to Run This Project

Follow these steps to run the Weather App on your local machine:

1. **Open the Project**

   If you created it already, open the folder in your code editor.

   If you downloaded it from GitHub, navigate to the folder:

   ```bash
   cd weather-app
   
2. **Install Node Modules**
    Install dependencies by running:

    ```bash
    npm install

3. **Add Your API Key**

    Go to: src/api/weatherAPI.js
    
    Replace YOUR_API_KEY with your real key from WeatherAPI
    ```const API_KEY = 'YOUR_API_KEY';```

4. **Start the App**
    ```bash
    npm run dev

5. **Test It**
   
    Type a city name (e.g. Kathmandu) in the input field.
   
    Click Get Weather.
   
    You will see:
    - City & country name
    - Temperature
    - Weather description
    - Weather icon

  - If the city is invalid or empty, an alert will appear.
