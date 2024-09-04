async function getWeather() {
  const apiKey = '73a1d053ca43024d2456134763cdc22c'; // Replace with your OpenWeatherMap API key
  const city = document.getElementById('cityInput').value;
  
  if (city === '') {
      alert('Please enter a city name');
      return;
  }
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        const weatherDisplay = document.getElementById('weatherDisplay');
        weatherDisplay.innerHTML = `
            <p><i class="fas fa-map-marker-alt"></i> City: ${data.name}</p>
            <p><i class="fas fa-thermometer-half"></i> Temperature: ${data.main.temp}°C</p>
            <p><i class="fas fa-cloud"></i> Weather: ${data.weather[0].description}</p>
            <p><i class="fas fa-tint"></i> Humidity: ${data.main.humidity}%</p>
            <p><i class="fas fa-wind"></i> Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        alert('City not found!');
    }
} catch (error) {
    alert('Error fetching weather data');
    console.error(error);
}
}
