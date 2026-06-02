const axios = require('axios');

module.exports = async function () {
  const response =
    await axios.get(
      `${this.baseUrl}/api/storage/files`,
      {
        headers:
          this.headers(),
      },
    );

  return response.data;
};
