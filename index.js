import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// Set up the Pocket API endpoint URL and parameters
const apiUrl = 'https://getpocket.com/v3/get';

// Make a request to the Pocket API
axios
  .post(
    apiUrl +
      `?consumer_key=${process.env.CONSUMER_KEY}&access_token=${process.env.ACCESS_TOKEN}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
