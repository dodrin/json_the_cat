const request = require("request");

//takes command line arguments
const args = process.argv.slice(2);
const breedToSearch = args[0];

const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(
  `${apiUrl}${breedToSearch}`,
  function(error, response, body) {
    if (error) {
      console.error(error);
      return;
    }
    const data = JSON.parse(body);
    if (args[0] === undefined || data[0] === undefined) {
      console.log("Please enter valid breed");
    } else {
      console.log(data[0].description);
    }
  }
);
