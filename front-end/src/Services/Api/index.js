const axios = require('axios');

export async function handleFetch(method, url, data = {}, headers = {}) {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response;
  } catch (error) {
    if (error.response) {
      return console.log({
        status: error.response.status,
        message: error.response.data.message,
      });
    }
    if (error.request) {
      return console.log(error.request, 'request');
    }
    return console.log('Error', error.message);
  }
}
