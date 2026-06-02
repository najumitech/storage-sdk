const FormData = require('form-data');
const axios = require('axios');

module.exports = async function (
  shield,
) {
  const form =
    new FormData();

  form.append(
    'shield',
    shield,
  );

  const response =
    await axios.post(
      `${this.baseUrl}/api/storage/delete`,
      form,
      {
        headers: {
          ...this.headers(),
          ...form.getHeaders(),
        },
      },
    );

  return response.data;
};
