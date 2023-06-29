const axios = require('axios');

export async function handleFetch(method, url, data = {}, headers = {}) {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const err = {
        status: error.response.status,
        message: error.response.data.message,
      };
      console.log(err);

      return err;
    }
    if (error.request) {
      return console.log(error.request, 'request');
    }
    return console.log('Error', error.message);
  }
}
