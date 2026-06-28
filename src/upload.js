const fs = require("fs");
const pathModule = require("path");
const FormData = require("form-data");
const axios = require("axios");

module.exports = async function (
  source,
  options = {}
) {
  let path = "/";
  let filename;
  let contentType;

  if (typeof options === "string") {
    path = options;
  } else {
    path = options.path || "/";
    filename = options.filename;
    contentType = options.contentType;
  }

  const form = new FormData();

  form.append("path", path);

  // File path
  if (typeof source === "string") {
    if (!fs.existsSync(source)) {
      throw new Error(
        `File not found: ${source}`
      );
    }

    form.append(
      "file",
      fs.createReadStream(source),
      {
        filename:
          filename ||
          pathModule.basename(source),
        contentType,
      }
    );
  }

  // Buffer
  else if (Buffer.isBuffer(source)) {
    form.append(
      "file",
      source,
      {
        filename:
          filename || "upload.bin",
        contentType,
      }
    );
  }

  // Multer
  else if (
    source &&
    source.buffer
  ) {
    form.append(
      "file",
      source.buffer,
      {
        filename:
          filename ||
          source.originalname ||
          "upload.bin",
        contentType:
          contentType ||
          source.mimetype,
      }
    );
  }

  // Stream
  else if (
    source &&
    typeof source.pipe === "function"
  ) {
    form.append(
      "file",
      source,
      {
        filename:
          filename || "stream.bin",
        contentType,
      }
    );
  }

  else {
    throw new Error(
      "Unsupported upload source."
    );
  }

  const response =
    await axios.post(
      `${this.baseUrl}/api/storage/upload`,
      form,
      {
        headers: {
          ...this.headers(),
          ...form.getHeaders(),
        },

        timeout:
          this.timeout,

        maxBodyLength:
          Infinity,

        maxContentLength:
          Infinity,
      }
    );

  return response.data;
};
