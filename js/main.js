window.addEventListener("load", () => {
  const weatherDescription = document.querySelector(".weather-description");
  const temperatureDegree = document.querySelector(".temperature-degree");
  const locationName = document.querySelector(".location-name");
  const weatherIcon = document.querySelector(".weather-icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;

      const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a1342df749ada47e709f699590a66861
      `;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          const icon = data.weather[0].icon;
          const temp = data.main.temp;
          temperatureDegree.textContent = Math.floor(temp);
          weatherDescription.textContent = data.weather[0].description;
          locationName.textContent = data.name;
          weatherIcon.innerHTML = `<img src="icons/${icon}.png">`;
        });
    });
  }
});
