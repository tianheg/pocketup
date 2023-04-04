import GetPocket from 'node-getpocket';
import dotenv from 'dotenv';
dotenv.config();


var config = {
  consumer_key: process.env.CONSUMER_KEY,
  request_token: process.env.RESUEST_TOKEN,
  redirect_uri: 'http://localhost:8080/redirect',
};

var pocket = new GetPocket(config);
var url = pocket.getAuthorizeURL(config);
console.log(url);
