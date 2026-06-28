const fs = require('fs');

const NajumiStorage =
  require('./src/client');

const storage =
  new NajumiStorage({
    baseUrl:
      'http://localhost:4000',
    bucketId:
      'njs_bucket_f1d9138a8fc303d2',
    accessKey:
      'njs_acc_cc34445a1422595fdb547172',
    secretKey:
      'njs_sec_27775cb49a8dc874cc6675abf553520a65442fe44260da1d',
  });

(async () => {
  try {

    console.log(
      '\n=== STATS ==='
    );

    const stats =
      await storage.stats();

    console.log(stats);

    console.log(
      '\n=== FILES ==='
    );

    const files =
      await storage.files();

    console.log(
      `Files: ${files.count}`
    );

    fs.writeFileSync(
      './sdk-test.txt',
      'Najumi SDK Full Test'
    );

    console.log(
      '\n=== UPLOAD ==='
    );

    const upload =
      await storage.upload(
        './sdk-test.txt',
        'sdk'
      );

    console.log(upload);

    console.log(
      '\n=== DOWNLOAD ==='
    );

    await storage.download(
      upload.shield,
      './sdk-downloaded.txt'
    );

    console.log(
      fs.readFileSync(
        './sdk-downloaded.txt',
        'utf8'
      )
    );

    console.log(
      '\n=== DELETE ==='
    );

    const deleted =
      await storage.delete(
        upload.shield
      );

    console.log(
      deleted
    );

    console.log(
      '\n=== TEST COMPLETE ==='
    );

  } catch (err) {

    console.error(
      err.response?.data ||
      err.message ||
      err
    );

  }
})();
