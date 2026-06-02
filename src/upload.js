const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');

module.exports = async function (
  filePath,
  path = '/',
) {
  const form = new FormData();

  form.append(
    'path',
    path,
  );

  form.append(
    'file',
    fs.createReadStream(
      filePath,
    ),
  );

  const response =
    await axios.post(
      `${this.baseUrl}/api/storage/upload`,
      form,
      {
        headers: {
          ...this.headers(),
          ...form.getHeaders(),
        },
        maxBodyLength:
          Infinity,
      },
    );

  return response.data;
};
