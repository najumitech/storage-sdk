const upload = require("./upload");
const files = require("./files");
const stats = require("./stats");
const download = require("./download");
const remove = require("./delete");

class NajumiStorage {
  constructor(config = {}) {
    this.baseUrl =
      config.baseUrl ||
      "https://storage-api.najumitech.com";

    this.bucketId = config.bucketId;
    this.accessKey = config.accessKey;
    this.secretKey = config.secretKey;

    this.timeout =
      config.timeout || 60000;

    this.version = "1.1.0";

    if (!this.bucketId) {
      throw new Error(
        "Missing bucketId."
      );
    }

    if (!this.accessKey) {
      throw new Error(
        "Missing accessKey."
      );
    }

    if (!this.secretKey) {
      throw new Error(
        "Missing secretKey."
      );
    }
  }

  headers() {
    return {
      "x-bucket-id":
        this.bucketId,

      "x-access-key":
        this.accessKey,

      "x-secret-key":
        this.secretKey,

      "User-Agent":
        `@najumi/storage/${this.version}`,
    };
  }
}

NajumiStorage.prototype.upload =
  upload;

NajumiStorage.prototype.files =
  files;

NajumiStorage.prototype.stats =
  stats;

NajumiStorage.prototype.download =
  download;

NajumiStorage.prototype.delete =
  remove;

module.exports =
  NajumiStorage;
