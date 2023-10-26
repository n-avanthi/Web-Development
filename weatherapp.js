document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var cityName = document.getElementById("cityName").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e0eae74c392fbea9016a57786344c0b3";
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var temperature = data.main.temp;
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;
        var precipitation = data.weather[0].main;
  
        document.getElementById("result").innerHTML = "Temperature in " + cityName + ": " + temperature + "K";
  
        var weatherDetails = document.getElementById("weatherDetails");
        weatherDetails.innerHTML = `
          <div class="weather-details">
              <span><img class="weather-icon" src="https://cdn-icons-png.flaticon.com/512/2944/2944651.png" alt="Temperature">Temperature: ${temperature}K</span>
            <span><img class="weather-icon" src="https://cdn-icons-png.flaticon.com/512/10595/10595994.png" alt="Humidity">Humidity: ${humidity}%</span>
            <span><img class="weather-icon" src="https://cdn-icons-png.flaticon.com/512/6014/6014856.png" alt="Wind">Wind: ${windSpeed} km/h</span>
            <span><img class="weather-icon" src="https://as2.ftcdn.net/v2/jpg/04/61/74/11/1000_F_461741142_7qvACaeiTMyMJWqzR1U20cvaWmwBKYAT.jpg" alt="Precipitation">Precipitation: ${precipitation}</span>
          </div>
        `;
      })
      .catch(function(error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Error retrieving weather data.";
      });
  });