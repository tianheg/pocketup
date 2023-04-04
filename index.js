import fs from 'fs';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

// Set up the Pocket API endpoint URL and parameters
const apiUrl = 'http://getpocket.com/v3/get';

// Make a request to the Pocket API
axios
  .post(
    apiUrl,
    {
      consumer_key: process.env.CONSUMER_KEY,
      access_token: process.env.ACCESS_TOKEN,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  .then((res) => {
    fs.writeFileSync('data.json', JSON.stringify(res.data['list']));
    console.log('Saved to data.json');
  })
  .catch((error) => console.error(error));
