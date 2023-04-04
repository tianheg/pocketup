import GetPocket from 'node-getpocket';
import dotenv from 'dotenv';
dotenv.config();

var config = {
  consumer_key: process.env.CONSUMER_KEY,
};

var pocket = new GetPocket(config);

var params = {
  request_token: process.env.REQUEST_TOKEN,
};

pocket.getAccessToken(params, function (err, res, body) {
  console.log(res);
});
