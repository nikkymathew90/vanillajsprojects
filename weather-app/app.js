window.addEventListener("load", () => {
  let tempdegree = document.querySelector(".temp-degree");
  let timezone = document.querySelector(".location-timezone");
  let tempDescription = document.querySelector(".temp-description");
  let tempicon = document.querySelector("img");
  let key = config.MY_KEY;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      let { latitude, longitude } = position.coords;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${key}`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { temp } = data.main;
          const { name } = data;
          const { description, icon } = data.weather[0];
          tempdegree.textContent = (temp - 273.15).toFixed(2);
          tempDescription.textContent = description;
          timezone.textContent = name;
          iconurl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          tempicon.setAttribute("src", iconurl);
        });
    });
  }
});
