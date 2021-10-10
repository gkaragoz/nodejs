const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// mapbox token: pk.eyJ1IjoiYW5ub3R0bzMiLCJhIjoiY2tkd3VjY2xiMmZ0NDJzb2RkYTRpeHl6eSJ9.DBUQf1yWDw3KJtZ1gNoLhg
// weatherstack token: f6a54f16a31b377e0e51f22cba556517

const address = process.argv[2];
if (!address) {
  console.log("Please provide an adress in terminal.");
} else {
  geocode(address, (error, { latitude, longtitude, location } = {}) => {
    if (error) return console.log(error);

    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) return console.log(error);

      console.log(location);
      console.log(forecastData);
    });
  });
}
