const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// mapbox token: pk.eyJ1IjoiYW5ub3R0bzMiLCJhIjoiY2tkd3VjY2xiMmZ0NDJzb2RkYTRpeHl6eSJ9.DBUQf1yWDw3KJtZ1gNoLhg
// weatherstack token: f6a54f16a31b377e0e51f22cba556517

geocode("Los Angeles", (error, data) => {
  if (error) return console.log(error);

  forecast(data.latitude, data.longtitude, (error, forecastData) => {
    if (error) return console.log(error);

    console.log(data.location);
    console.log(forecastData);
  });
});
