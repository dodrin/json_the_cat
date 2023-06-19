const request = require("request");

const fetchBreedDescription = function (breedName, callback) {

  const api = "https://api.thecatapi.com/v1/breeds/search?q=";
  const url = api + breedName;

  request(url, function (error, response, body) {
    const data = JSON.parse(body);
    
    if (error) {
      callback(error, null);
    } else if (breedName === undefined || data[0] === undefined) {
      error = "Your request breed does not exist";
      callback(error, null);
    } else {
      desc = data[0][description];
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };