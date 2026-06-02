const axios = require('axios');

module.exports = async function () {
  const response =
    await axios.get(
      `${this.baseUrl}/api/storage/stats`,
      {
        headers:
          this.headers(),
      },
    );

  return response.data;
};
