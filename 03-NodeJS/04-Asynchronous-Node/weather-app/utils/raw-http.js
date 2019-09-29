const https = require('https');
const url = 'https://api.darksky.net/forecast/65d08e5afe26c1cee6bf1ac0d986faf3/37.8267,-122.4233';

const request = https.request(url, (response) => {
  //register an handler
  let data = ""


  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })
  response.on('end', (data) => {
    const body = JSON.parse(data);
    console.log(body);
  })
})
request.on('error', (error) => {
  console.log('llerrorll', error)
});
request.end();

