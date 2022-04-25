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
  } catch (err) {
    return console.log(err.message);
  }
}
