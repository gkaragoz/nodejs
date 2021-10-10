const request = require("postman-request");

const forecast = (latitude, longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f6a54f16a31b377e0e51f22cba556517&query=${latitude},${longtitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        weather_description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
