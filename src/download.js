const fs = require('fs');
const axios = require('axios');

module.exports = async function (
  shield,
  outputPath,
) {
  const response =
    await axios.get(
      `${this.baseUrl}/api/storage/download/${shield}`,
      {
        headers:
          this.headers(),
        responseType:
          'stream',
      },
    );

  const writer =
    fs.createWriteStream(
      outputPath,
    );

  response.data.pipe(
    writer,
  );

  return new Promise(
    (
      resolve,
      reject,
    ) => {
      writer.on(
        'finish',
        resolve,
      );

      writer.on(
        'error',
        reject,
      );
    },
  );
};
