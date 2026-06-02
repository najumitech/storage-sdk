declare class NajumiStorage {
  constructor(config: {
    bucketId: string;
    accessKey: string;
    secretKey: string;
    baseUrl?: string;
  });

  stats(): Promise<any>;

  files(): Promise<any>;

  upload(
    filePath: string,
    path?: string
  ): Promise<any>;

  download(
    shield: string,
    outputPath: string
  ): Promise<void>;

  delete(
    shield: string
  ): Promise<any>;
}

export = NajumiStorage;
