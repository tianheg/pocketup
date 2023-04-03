import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// Set up the Pocket API endpoint URL and parameters
const apiUrl = 'https://getpocket.com/v3/oauth/request';

// Make a request to the Pocket API
axios
  .post(
    apiUrl +
      `?consumer_key=${process.env.CONSUMER_KEY}&redirect_uri=https://github.com/tianheg/pocketup`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Accept': 'application/x-www-form-urlencoded',
      },
    }
  )
  .then((res) => console.log(res.data.split('=')[1]))
  .catch((error) => console.error(error));

// Install App
// https://getpocket.com/auth/authorize?request_token=...&redirect_uri=https://github.com/tianheg/pocketup
