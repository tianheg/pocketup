import GetPocket from 'node-getpocket';
import dotenv from 'dotenv';
dotenv.config();

var config = {
  consumer_key: process.env.CONSUMER_KEY,
  redirect_uri: 'http://localhost:8080/redirect',
};

var pocket = new GetPocket(config);
var params = {
  redirect_uri: config.redirect_uri,
};
pocket.getRequestToken(params, function (err, resp, body) {
  if (err) {
    console.log('Oops; getTokenRequest failed: ' + err);
  } else {
    var json = JSON.parse(body);
    var request_token = json.code;
    console.log('request_token: ' + request_token);
  }
});
