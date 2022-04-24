const axios = require('axios');

export async function handleFetch(method, url, data = {}, headers = {}) {
  const response = await axios({
    method,
    url,
    data,
    headers,
  });

  return response;
}
