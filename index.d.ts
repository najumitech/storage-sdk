y/// <reference types="node" />

import { Readable } from "stream";

interface NajumiStorageConfig {
  bucketId: string;
  accessKey: string;
  secretKey: string;
  baseUrl?: string;
  timeout?: number;
}

interface UploadOptions {
  path?: string;
  filename?: string;
  contentType?: string;
}

declare class NajumiStorage {
  constructor(
    config: NajumiStorageConfig
  );

  stats(): Promise<any>;

  files(): Promise<any>;

  upload(
    filePath: string,
    path?: string
  ): Promise<any>;

  upload(
    filePath: string,
    options?: UploadOptions
  ): Promise<any>;

  upload(
    buffer: Buffer,
    options?: UploadOptions
  ): Promise<any>;

  upload(
    stream: Readable,
    options?: UploadOptions
  ): Promise<any>;

  upload(
    file: {
      buffer: Buffer;
      originalname?: string;
      mimetype?: string;
    },
    options?: UploadOptions
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

