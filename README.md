# Najumi Storage SDK

Introduction

Najumi Storage is a developer-focused cloud object storage platform built by Najumi Tech for securely storing, managing, and delivering files at scale.

The platform provides a simple and powerful API that allows developers to upload files, organize data using buckets, retrieve stored content, monitor storage usage, and integrate cloud storage directly into their applications.

The Najumi Storage SDK simplifies communication with the Najumi Storage API by providing an easy-to-use interface for common storage operations such as uploading files, listing bucket contents, downloading files, retrieving bucket statistics, and deleting stored objects.

Designed with simplicity, performance, and scalability in mind, Najumi Storage enables developers to integrate cloud storage functionality into backend services, web applications, mobile platforms, automation workflows, and enterprise systems without dealing with low-level API complexity.

Key benefits of Najumi Storage include:

- Secure bucket-based storage architecture.
- Access Key and Secret Key authentication.
- Simple file upload and download workflows.
- Storage usage and bucket statistics.
- Developer-friendly APIs and SDKs.
- Scalable cloud infrastructure.
- Easy integration with modern JavaScript applications.

This SDK is the official Node.js client for Najumi Storage and provides a convenient way to interact with the Najumi Storage API from server-side applications.

Whether you are building a startup, enterprise application, SaaS platform, content delivery system, backup solution, or automation workflow, Najumi Storage provides the storage foundation needed to manage files reliably and efficiently.


## Features

Najumi Storage provides a modern cloud storage experience for developers and businesses.

Core Features

- Bucket-based file organization.
- Secure Access Key and Secret Key authentication.
- Upload files directly from applications.
- Download files securely using file identifiers.
- Delete files programmatically.
- Retrieve bucket statistics and storage usage.
- List and manage bucket contents.
- Public and private storage workflows.
- Fast API responses optimized for production use.
- Scalable cloud object storage architecture.

SDK Features

- Official JavaScript SDK.
- Node.js support.
- TypeScript support.
- Browser-compatible architecture.
- React integration support.
- Next.js integration support.
- Promise-based API.
- Simple and intuitive developer experience.
- Lightweight dependency footprint.
- Easy deployment into existing projects.

Security Features

- Bucket-level authentication.
- Access Key validation.
- Secret Key validation.
- Request authorization middleware.
- Isolated bucket environments.
- Protected file operations.
- Secure API communication over HTTPS.

Developer Experience

- Easy installation through npm.
- Minimal configuration required.
- Clean and predictable API methods.
- Detailed documentation.
- Consistent response formats.
- Production-ready architecture.
- Quick onboarding for new developers.


## Installation
Installation

Install the official Najumi Storage SDK using your preferred package manager.

npm

npm install @najumi/storage

Yarn

yarn add @najumi/storage

pnpm

pnpm add @najumi/storage

Bun

bun add @najumi/storage

Requirements

Before using the SDK, make sure you have:

- A Najumi Storage account.
- An active storage bucket.
- A valid Access Key.
- A valid Secret Key.
- Node.js 18 or later.

Verify Installation

Create a simple test file:

const NajumiStorage =
require('@najumi/storage');

console.log(
  'Najumi Storage SDK loaded successfully'
);

Run:

node test.js

Expected output:

Najumi Storage SDK loaded successfully

If you see the message above, the SDK has been installed successfully and is ready to use.


## Create a Bucket

Najumi Storage organizes files using Buckets.

A bucket is a logical storage container that holds files, folders, usage statistics, API credentials, and access rules.

Before uploading files with the SDK, you must first create a bucket from the Najumi Storage dashboard.

What is a Bucket?

A bucket acts as an isolated storage environment.

Each bucket has:

- A unique Bucket ID.
- Dedicated API credentials.
- Separate storage statistics.
- Separate bandwidth tracking.
- Independent file management.

This allows applications, projects, or customers to be separated from one another securely.

Creating a New Bucket

1. Sign in to the Najumi Storage Dashboard.
2. Navigate to the Buckets section.
3. Click Create Bucket.
4. Enter a bucket name.
5. Select a storage region.
6. Choose the desired visibility settings.
7. Click Create.

After creation, Najumi Storage will generate a unique bucket identifier.

Example:

njs_bucket_75f9cb59f4093969

Bucket Information

Every bucket contains important metadata.

Example:

{
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "name": "Production Assets",
  "visibility": "public",
  "region": "global"
}

Recommended Bucket Structure

For most applications, it is recommended to separate environments into different buckets.

Example:

Production Bucket
njs_bucket_prod

Staging Bucket
njs_bucket_stage

Development Bucket
njs_bucket_dev

This reduces operational risk and helps keep environments isolated.

Bucket Visibility

Najumi Storage supports different visibility models.

Public

Files may be shared publicly depending on application requirements.

Recommended for:

- Public assets
- Images
- Static resources
- Downloads

Private

Files require valid authentication credentials before access.

Recommended for:

- User uploads
- Internal documents
- Backups
- Sensitive business data

Bucket Limits

Bucket limits depend on your Najumi Storage plan.

Available limits may include:

- Maximum storage capacity.
- Bandwidth allocation.
- File count limits.
- API request quotas.

You can monitor usage from the bucket dashboard at any time.

Next Step

After creating a bucket, generate API credentials for secure access.

The next section explains how to create and manage:

- Access Keys
- Secret Keys
- SDK Authentication Credentials


## Generate API Keys

Every Najumi Storage bucket is protected using API credentials.

These credentials allow applications to securely authenticate and interact with the Najumi Storage API.

Before using the SDK, you must generate API credentials for your bucket.

Authentication Components

Najumi Storage uses three credentials:

Bucket ID

Identifies the target storage bucket.

Example:

njs_bucket_75f9cb59f4093969

Access Key

Used to identify the application making requests.

Example:

njs_acc_43222ce64a9cec410117113e

Secret Key

Used to verify that requests are authorized.

Example:

njs_sec_3a3fe60537492647dcac07b3b1a539d2a436df7f5824f4da

Creating API Credentials

1. Open the Najumi Storage Dashboard.
2. Navigate to the desired bucket.
3. Open the API Access section.
4. Click Generate API Keys.
5. Copy the generated credentials.
6. Store them securely.

After generation you will receive:

{
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "accessKey": "njs_acc_xxxxxxxxxxxxxxxxx",
  "secretKey": "njs_sec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}

Using Credentials with the SDK

These credentials are required when initializing the SDK.

Example:

const NajumiStorage =
require('@najumi/storage');

const storage =
new NajumiStorage({
  bucketId:
    'njs_bucket_75f9cb59f4093969',

  accessKey:
    'njs_acc_xxxxxxxxxxxxxxxxx',

  secretKey:
    'njs_sec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
});

Environment Variables (Recommended)

Avoid hardcoding credentials directly in source code.

Instead, use environment variables.

Example:

NAJUMI_BUCKET_ID=njs_bucket_75f9cb59f4093969
NAJUMI_ACCESS_KEY=njs_acc_xxxxxxxxxxxxxxxxx
NAJUMI_SECRET_KEY=njs_sec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Usage:

const storage =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,

  accessKey:
    process.env.NAJUMI_ACCESS_KEY,

  secretKey:
    process.env.NAJUMI_SECRET_KEY,
});

Credential Permissions

API credentials grant access only to the bucket they belong to.

Credentials from one bucket cannot access:

- Files in another bucket.
- Statistics from another bucket.
- Upload operations in another bucket.
- Delete operations in another bucket.

This isolation helps protect customer data and maintain secure storage boundaries.

Rotating Credentials

If credentials are exposed or compromised:

1. Open the bucket dashboard.
2. Navigate to API Access.
3. Revoke the existing keys.
4. Generate new credentials.
5. Update your applications.

Important Security Notice

Never expose Secret Keys in:

- Frontend applications.
- Browser source code.
- Public GitHub repositories.
- Client-side JavaScript.
- Mobile application bundles.

Secret Keys should only be used in trusted server environments.

Next Step

Once credentials have been generated, initialize the SDK client and establish a connection to your bucket.

The next section explains SDK initialization and client configuration.


## Initialize Client

Before performing any storage operations, you must initialize a Najumi Storage client instance.

The client manages authentication, API communication, and bucket access.

CommonJS

For traditional Node.js applications:

const NajumiStorage =
require('@najumi/storage');

const storage =
new NajumiStorage({
  bucketId:
    'YOUR_BUCKET_ID',

  accessKey:
    'YOUR_ACCESS_KEY',

  secretKey:
    'YOUR_SECRET_KEY',
});

ES Modules

For modern JavaScript applications:

import NajumiStorage
from '@najumi/storage';

const storage =
new NajumiStorage({
  bucketId:
    'YOUR_BUCKET_ID',

  accessKey:
    'YOUR_ACCESS_KEY',

  secretKey:
    'YOUR_SECRET_KEY',
});

Using Environment Variables

Production applications should use environment variables instead of hardcoded credentials.

.env

NAJUMI_BUCKET_ID=njs_bucket_xxxxxxxxxxxxx
NAJUMI_ACCESS_KEY=njs_acc_xxxxxxxxxxxxx
NAJUMI_SECRET_KEY=njs_sec_xxxxxxxxxxxxx

Configuration

const NajumiStorage =
require('@najumi/storage');

const storage =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,

  accessKey:
    process.env.NAJUMI_ACCESS_KEY,

  secretKey:
    process.env.NAJUMI_SECRET_KEY,
});

Custom API Endpoint

By default, the SDK connects to the official Najumi Storage API.

const storage =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,

  accessKey:
    process.env.NAJUMI_ACCESS_KEY,

  secretKey:
    process.env.NAJUMI_SECRET_KEY,

  baseUrl:
    'https://storage-api.najumitech.com',
});

Configuration Options

Option| Type| Required| Description
bucketId| string| Yes| Unique bucket identifier
accessKey| string| Yes| Bucket access key
secretKey| string| Yes| Bucket secret key
baseUrl| string| No| Custom API endpoint

Example Initialization

const NajumiStorage =
require('@najumi/storage');

const storage =
new NajumiStorage({
  bucketId:
    'njs_bucket_75f9cb59f4093969',

  accessKey:
    'njs_acc_xxxxxxxxxxxxxxxxx',

  secretKey:
    'njs_sec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',

  baseUrl:
    'https://storage-api.najumitech.com',
});

Verify Connection

You can verify your configuration by requesting bucket statistics.

const stats =
await storage.stats();

console.log(stats);

Example response:

{
  "status": "success",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "totalFiles": 0,
  "totalStorageUsed": 0
}

If a valid response is returned, the SDK has been initialized successfully and is ready for use.

Next Step

After initializing the client, learn how authentication works and how credentials are validated on every request.

The next section covers authentication and request security.

## Authentication

Najumi Storage uses bucket-based authentication to secure all API operations.

Every request sent through the SDK or REST API is validated before access is granted.

Authentication ensures that only authorized applications can access bucket resources.

Authentication Model

Najumi Storage authentication is based on three credentials:

- Bucket ID
- Access Key
- Secret Key

All three values must be valid before a request can be processed.

Example:

Bucket ID:
njs_bucket_75f9cb59f4093969

Access Key:
njs_acc_xxxxxxxxxxxxxxxxx

Secret Key:
njs_sec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

How Authentication Works

When an SDK method is called, the SDK automatically sends authentication headers with every request.

Example request headers:

x-bucket-id: njs_bucket_75f9cb59f4093969
x-access-key: njs_acc_xxxxxxxxxxxxxxxxx
x-secret-key: njs_sec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

The Najumi Storage API verifies:

1. The bucket exists.
2. The access key exists.
3. The secret key matches.
4. The credentials belong to the bucket.
5. The credentials are active.

Only after successful validation will the request continue.

SDK Authentication

After client initialization, authentication is handled automatically.

const storage =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,

  accessKey:
    process.env.NAJUMI_ACCESS_KEY,

  secretKey:
    process.env.NAJUMI_SECRET_KEY,
});

No additional login or token generation is required.

Request Validation

Every API operation requires authentication.

Protected operations include:

- Uploading files
- Listing files
- Downloading files
- Deleting files
- Retrieving bucket statistics

Unauthorized requests are rejected automatically.

Authentication Failure Example

Example response:

{
  "status": "error",
  "message":
    "missing storage credentials"
}

Possible causes:

- Missing Bucket ID.
- Missing Access Key.
- Missing Secret Key.
- Invalid credentials.
- Revoked credentials.

Bucket Isolation

Buckets are completely isolated from each other.

For example:

Bucket A
njs_bucket_A

Bucket B
njs_bucket_B

Credentials for Bucket A cannot:

- View files in Bucket B.
- Delete files in Bucket B.
- Download files from Bucket B.
- Access Bucket B statistics.

This prevents cross-bucket access and improves security.

Server-Side Usage

For maximum security, SDK credentials should be used only on trusted servers.

Recommended environments:

- Node.js servers
- Express applications
- NestJS applications
- Next.js API routes
- Backend microservices
- Serverless functions

Client-Side Usage

Do not expose Secret Keys inside:

- Browser JavaScript
- React frontend source code
- Vue frontend source code
- Angular applications
- Mobile applications
- Public repositories

Anyone with access to a Secret Key may gain access to bucket operations.

Credential Rotation

If credentials become compromised:

1. Open the bucket dashboard.
2. Navigate to API Access.
3. Revoke existing credentials.
4. Generate new credentials.
5. Update applications immediately.

Regular credential rotation is recommended for production environments.

Security Recommendations

Always:

- Use HTTPS.
- Store credentials in environment variables.
- Restrict access to production secrets.
- Rotate credentials periodically.
- Use separate buckets for development and production.

Never:

- Commit secrets to Git repositories.
- Share Secret Keys publicly.
- Embed credentials in frontend applications.
- Store secrets in source code.

Next Step

After authentication is configured, files can be uploaded to a bucket using the SDK.

The next section covers file uploads, supported workflows, and upload responses.


## Upload File

Uploading files is one of the core features of Najumi Storage.

The SDK provides a simple method for transferring files from your application to a Najumi Storage bucket.

Once uploaded, files become available for listing, downloading, analytics, and management operations.

Basic Upload

Upload a file using its local path.

const result =
await storage.upload(
  './file.txt'
);

console.log(result);

Upload to a Custom Path

Files can be organized using custom storage paths.

const result =
await storage.upload(
  './logo.png',
  '/assets/images'
);

Example:

/assets/images/logo.png

Organizing files into folders helps maintain a clean bucket structure.

Supported File Types

Najumi Storage accepts most common file formats.

Examples include:

- Images
- Documents
- PDFs
- Videos
- Audio files
- Archives
- Text files
- Application assets

Examples:

jpg
jpeg
png
gif
webp
pdf
docx
xlsx
pptx
mp4
mp3
zip
txt
json

Upload Example

const upload =
await storage.upload(
  './profile-photo.png'
);

console.log(upload);

Successful response:

{
  "status": "success",
  "fileId": "6a1ec6b72eb0642b05265a2f",
  "shield": "ns_1780401847069",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "path": "/",
  "key": "files/e33eceae-8ffc-477f-81a9-f5e4f305094c"
}

Response Fields

Field| Description
status| Request status
fileId| Internal file identifier
shield| Public file reference identifier
bucketId| Bucket identifier
path| Storage path
key| Internal storage object key

Uploading Multiple Files

Multiple files can be uploaded sequentially.

Example:

const files = [
  './image1.png',
  './image2.png',
  './image3.png',
];

for (const file of files) {
  const result =
    await storage.upload(
      file
    );

  console.log(result);
}

Using Async Workflows

Example:

async function uploadFile() {
  try {
    const result =
      await storage.upload(
        './report.pdf'
      );

    console.log(
      'Uploaded:',
      result
    );
  } catch (error) {
    console.error(
      error
    );
  }
}

uploadFile();

File Organization Best Practices

Recommended structure:

/uploads
/images
/videos
/documents
/backups
/assets

Example:

await storage.upload(
  './banner.png',
  '/assets'
);

await storage.upload(
  './invoice.pdf',
  '/documents'
);

await storage.upload(
  './backup.zip',
  '/backups'
);

Upload Limits

Upload limits depend on:

- Bucket configuration
- Storage plan
- Available storage quota

If a limit is exceeded, the API returns an error response.

Common Upload Errors

Example:

{
  "status": "error",
  "message":
    "file required"
}

Possible causes:

- Missing file.
- Invalid file path.
- Empty upload request.
- Storage quota exceeded.
- Authentication failure.

Production Recommendation

Always wrap uploads inside try/catch blocks.

try {
  const result =
    await storage.upload(
      './file.pdf'
    );

  console.log(result);
} catch (error) {
  console.error(
    error.response?.data ||
    error.message
  );
}

This allows applications to handle failures gracefully.

Next Step

After uploading files, you can retrieve and inspect bucket contents.

The next section explains how to list files stored inside a bucket.


## List Files

Listing files allows applications to retrieve and inspect the contents of a bucket.

This operation is useful for:

- File managers
- Dashboards
- Content browsers
- Media libraries
- Administrative tools

The SDK provides a simple method for retrieving files stored in a bucket.

Basic Usage

const files =
await storage.files();

console.log(files);

Example Response

{
  "status": "success",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "count": 2,
  "files": [
    {
      "_id": "6a1ec6b72eb0642b05265a2f",
      "name": "test.txt",
      "originalName": "test.txt",
      "path": "/",
      "type": "text/plain",
      "size": 24,
      "shield": "ns_1780401847069",
      "bucket": "6a1e069d37d287926ad3233f",
      "timestamp": "2026-06-02T12:04:07.073Z"
    }
  ]
}

Response Fields

Root Response

Field| Description
status| Request status
bucketId| Bucket identifier
count| Number of files returned
files| Array of file objects

File Object

Each file contains metadata describing the stored object.

Field| Description
_id| Internal database identifier
name| File name
originalName| Original uploaded file name
path| Storage path
type| MIME content type
size| File size in bytes
shield| Unique file reference
bucket| Internal bucket reference
timestamp| Upload timestamp

Display Files

Example:

const result =
await storage.files();

for (const file of result.files) {
  console.log(
    file.name,
    file.size
  );
}

Output:

test.txt 24
image.png 961851

Building a File Browser

Example:

const result =
await storage.files();

result.files.forEach(
  (file) => {
    console.log({
      name:
        file.name,
      size:
        file.size,
      type:
        file.type,
      uploaded:
        file.timestamp,
    });
  }
);

Counting Files

Example:

const result =
await storage.files();

console.log(
  result.count
);

Output:

2

Empty Bucket Example

{
  "status": "success",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "count": 0,
  "files": []
}

Applications should always handle empty buckets gracefully.

Common Use Cases

File Manager

const result =
await storage.files();

renderFiles(
  result.files
);

Dashboard Statistics

const result =
await storage.files();

console.log(
  `Files: ${result.count}`
);

Media Library

const result =
await storage.files();

const images =
  result.files.filter(
    (file) =>
      file.type.startsWith(
        'image/'
      )
  );

Error Example

{
  "status": "error",
  "message":
    "authentication failed"
}

Possible causes:

- Invalid Bucket ID.
- Invalid Access Key.
- Invalid Secret Key.
- Revoked credentials.

Best Practices

- Cache file listings when possible.
- Avoid requesting large lists repeatedly.
- Use bucket statistics for quick metrics.
- Store file identifiers for future operations.
- Use shield values for downloads and deletes.

Next Step

After retrieving bucket contents, you can inspect storage usage and bucket metrics.

The next section covers bucket statistics and usage analytics.


## Bucket Statistics
Bucket Statistics provide real-time insights into storage usage, file counts, and bandwidth consumption within a Najumi Storage bucket.

Statistics are useful for monitoring growth, tracking resource usage, and building dashboards or administrative tools.

Retrieve Bucket Statistics

Use the "stats()" method to retrieve bucket information.

const stats =
await storage.stats();

console.log(stats);

Example Response

{
  "status": "success",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "bucketName": "Testing",
  "totalFiles": 2,
  "totalStorageUsed": 961875,
  "totalBandwidthUsed": 24,
  "visibility": "public",
  "region": "global",
  "createdAt": "2026-06-01T22:24:29.436Z",
  "updatedAt": "2026-06-02T12:04:07.073Z"
}

Response Fields

Field| Description
status| Request status
bucketId| Unique bucket identifier
bucketName| Bucket name
totalFiles| Total files stored in the bucket
totalStorageUsed| Total storage consumed in bytes
totalBandwidthUsed| Total bandwidth consumed in bytes
visibility| Bucket visibility setting
region| Bucket region
createdAt| Bucket creation timestamp
updatedAt| Last bucket update timestamp

Display Statistics

Example:

const stats =
await storage.stats();

console.log(
  'Files:',
  stats.totalFiles
);

console.log(
  'Storage:',
  stats.totalStorageUsed
);

console.log(
  'Bandwidth:',
  stats.totalBandwidthUsed
);

Human-Readable Storage

Applications may convert bytes into readable units.

Example:

function formatBytes(
  bytes
) {
  if (!bytes) {
    return '0 B';
  }

  const units = [
    'B',
    'KB',
    'MB',
    'GB',
    'TB',
  ];

  const index =
    Math.floor(
      Math.log(bytes) /
      Math.log(1024)
    );

  return (
    (
      bytes /
      Math.pow(
        1024,
        index
      )
    ).toFixed(2) +
    ' ' +
    units[index]
  );
}

const stats =
await storage.stats();

console.log(
  formatBytes(
    stats.totalStorageUsed
  )
);

Dashboard Example

const stats =
await storage.stats();

console.table({
  Bucket:
    stats.bucketName,

  Files:
    stats.totalFiles,

  Storage:
    stats.totalStorageUsed,

  Bandwidth:
    stats.totalBandwidthUsed,

  Region:
    stats.region,
});

Monitoring Storage Growth

Statistics can be collected periodically for monitoring purposes.

Example:

setInterval(
  async () => {
    const stats =
      await storage.stats();

    console.log(
      stats.totalStorageUsed
    );
  },
  60000
);

This retrieves bucket statistics every minute.

Common Use Cases

Admin Dashboards

Display:

- Total files
- Storage usage
- Bandwidth consumption
- Bucket information

Billing Systems

Track:

- Storage growth
- Resource consumption
- Usage-based plans

Monitoring Services

Observe:

- Upload activity
- Storage trends
- Capacity planning

Error Example

{
  "status": "error",
  "message":
    "authentication failed"
}

Possible causes:

- Invalid Bucket ID.
- Invalid Access Key.
- Invalid Secret Key.
- Revoked credentials.

Best Practices

- Cache statistics when possible.
- Avoid unnecessary polling.
- Monitor storage growth regularly.
- Track bandwidth consumption.
- Set alerts before storage limits are reached.

Next Step

After monitoring bucket statistics, files can be downloaded directly from Najumi Storage using their shield identifiers.

The next section covers file downloads and retrieval workflows.



## Download File

Downloading files allows applications to retrieve objects stored inside a Najumi Storage bucket.

Files are downloaded using their unique Shield ID.

The SDK automatically authenticates requests and saves the downloaded file to the specified location.

Download a File

Use the "download()" method.

await storage.download(
  'ns_1780401847069',
  './downloaded-test.txt'
);

Parameters

Parameter| Type| Required| Description
shield| string| Yes| Unique file shield identifier
outputPath| string| Yes| Local destination path

Example

const result =
await storage.download(
  'ns_1780401847069',
  './downloaded-test.txt'
);

console.log(
  'Download completed'
);

Successful Download

After completion, the file will exist at the specified location.

Example:

ls -lah downloaded-test.txt

Output:

-rw-r--r-- 1 user user 24 Jun 2 12:10 downloaded-test.txt

Download Workflow

The SDK performs the following steps automatically:

1. Authenticates the request.
2. Validates bucket access.
3. Locates the file using the Shield ID.
4. Streams file data from storage.
5. Writes the file to disk.
6. Closes the file stream.

No manual stream handling is required.

Downloading into a Folder

Example:

await storage.download(
  'ns_1780401847069',
  './downloads/report.pdf'
);

Result:

downloads/
└── report.pdf

Async Example

async function getFile() {
  try {
    await storage.download(
      'ns_1780401847069',
      './downloaded.txt'
    );

    console.log(
      'File downloaded successfully'
    );
  } catch (error) {
    console.error(
      error
    );
  }
}

getFile();

Using Returned Files

Downloaded files can be:

- Processed by backend services.
- Sent to users.
- Stored locally.
- Archived.
- Analyzed.
- Imported into other systems.

File Verification Example

const fs =
require('fs');

await storage.download(
  'ns_1780401847069',
  './downloaded.txt'
);

const exists =
fs.existsSync(
  './downloaded.txt'
);

console.log(exists);

Output:

true

Common Errors

File Not Found

{
  "status": "error",
  "message":
    "file not found"
}

Possible causes:

- Invalid Shield ID.
- Deleted file.
- Incorrect identifier.

Bucket Access Denied

{
  "status": "error",
  "message":
    "file does not belong to bucket"
}

Possible causes:

- File belongs to another bucket.
- Incorrect credentials.
- Unauthorized access attempt.

Authentication Failed

{
  "status": "error",
  "message":
    "authentication failed"
}

Possible causes:

- Invalid Bucket ID.
- Invalid Access Key.
- Invalid Secret Key.

Best Practices

- Store Shield IDs safely.
- Validate file existence before processing.
- Handle download failures gracefully.
- Use try/catch blocks in production.
- Avoid exposing credentials to clients.

Security Notes

Downloads are protected by bucket authentication.

A file can only be downloaded if:

- The bucket credentials are valid.
- The file belongs to the authenticated bucket.
- Access validation succeeds.

This prevents cross-bucket file access.

Next Step

After downloading files, applications may need to remove obsolete or unwanted files.

The next section covers file deletion and cleanup operations using the SDK.



## Delete File

Deleting files allows applications to permanently remove objects from a Najumi Storage bucket.

This operation removes the file from storage and updates bucket statistics automatically.

Files are deleted using their unique Shield ID.

Delete a File

Use the "delete()" method.

const result =
await storage.delete(
  'ns_1780401847069'
);

console.log(result);

Parameters

Parameter| Type| Required| Description
shield| string| Yes| Unique file shield identifier

Successful Response

Example:

{
  "status": "success",
  "deleted": true,
  "shield": "ns_1780401847069",
  "key": "files/e33eceae-8ffc-477f-81a9-f5e4f305094c"
}

Response Fields

Field| Description
status| Request status
deleted| Indicates successful deletion
shield| Deleted file identifier
key| Internal storage object key

Basic Example

const result =
await storage.delete(
  'ns_1780401847069'
);

if (
  result.deleted
) {
  console.log(
    'File deleted successfully'
  );
}

Async Example

async function removeFile() {
  try {
    const result =
      await storage.delete(
        'ns_1780401847069'
      );

    console.log(
      result
    );
  } catch (error) {
    console.error(
      error
    );
  }
}

removeFile();

Typical Workflow

Many applications follow this process:

1. Upload a file.
2. Store the returned Shield ID.
3. Download or access the file when needed.
4. Delete the file when it is no longer required.

Example:

const upload =
await storage.upload(
  './report.pdf'
);

await storage.delete(
  upload.shield
);

Bucket Protection

Files can only be deleted if:

- The request is authenticated.
- The file belongs to the authenticated bucket.
- The Shield ID exists.

Files from other buckets cannot be deleted.

File Not Found Example

{
  "status": "error",
  "message":
    "file not found"
}

Possible causes:

- Invalid Shield ID.
- File already deleted.
- Incorrect identifier.

Unauthorized Bucket Access

{
  "status": "error",
  "message":
    "file does not belong to bucket"
}

Possible causes:

- File belongs to another bucket.
- Wrong credentials.
- Cross-bucket access attempt.

Authentication Failure

{
  "status": "error",
  "message":
    "authentication failed"
}

Possible causes:

- Invalid Bucket ID.
- Invalid Access Key.
- Invalid Secret Key.

Best Practices

- Confirm deletion before removing files.
- Store Shield IDs securely.
- Log deletion operations.
- Avoid deleting files immediately after upload unless necessary.
- Use application-level confirmations for user-facing systems.

Important Notice

File deletion is permanent.

Once a file has been deleted:

- It can no longer be downloaded.
- It will no longer appear in file listings.
- Storage usage statistics will be updated.
- Recovery may not be possible.

Always verify before deleting production data.

Next Step

After learning the core SDK operations, it is important to understand the response structures returned by the API.

The next section covers response formats, success responses, and error responses.



## Response Formats

All Najumi Storage SDK methods return structured JSON responses.

Understanding these response formats helps applications process results correctly and handle errors gracefully.

Success Response Structure

Successful operations typically return:

{
  "status": "success"
}

The response may also include additional data depending on the operation.

Upload Response

Example:

{
  "status": "success",
  "fileId": "6a1ec6b72eb0642b05265a2f",
  "shield": "ns_1780401847069",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "path": "/",
  "key": "files/e33eceae-8ffc-477f-81a9-f5e4f305094c"
}

List Files Response

Example:

{
  "status": "success",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "count": 2,
  "files": []
}

Bucket Statistics Response

Example:

{
  "status": "success",
  "bucketId": "njs_bucket_75f9cb59f4093969",
  "bucketName": "Testing",
  "totalFiles": 2,
  "totalStorageUsed": 961875,
  "totalBandwidthUsed": 24,
  "visibility": "public",
  "region": "global"
}

Delete Response

Example:

{
  "status": "success",
  "deleted": true,
  "shield": "ns_1780401847069",
  "key": "files/e33eceae-8ffc-477f-81a9-f5e4f305094c"
}

Common Success Pattern

Most successful operations include:

Field| Description
status| Response status
bucketId| Bucket identifier
shield| File identifier
data| Operation-specific data

Applications should first verify:

if (
  response.status ===
  'success'
) {
  // continue
}

Error Response Structure

Failed operations return:

{
  "status": "error",
  "message":
    "error description"
}

Authentication Error

Example:

{
  "status": "error",
  "message":
    "missing storage credentials"
}

File Not Found Error

Example:

{
  "status": "error",
  "message":
    "file not found"
}

Unauthorized Access Error

Example:

{
  "status": "error",
  "message":
    "file does not belong to bucket"
}

Validation Error

Example:

{
  "status": "error",
  "message":
    "file required"
}

Handling Errors

Always use try/catch blocks.

try {
  const result =
    await storage.upload(
      './file.txt'
    );

  console.log(
    result
  );
} catch (error) {
  console.error(
    error.response?.data ||
    error.message
  );
}

Checking Response Status

Example:

const result =
await storage.stats();

if (
  result.status ===
  'success'
) {
  console.log(
    'Request completed'
  );
}

Recommended Pattern

Example:

async function getStats() {
  try {
    const result =
      await storage.stats();

    if (
      result.status !==
      'success'
    ) {
      throw new Error(
        result.message
      );
    }

    return result;
  } catch (error) {
    console.error(
      error
    );
  }
}

Response Consistency

Najumi Storage is designed to maintain a consistent response format across all SDK methods.

This allows developers to build predictable integrations and simplify application logic.

Next Step

After understanding response formats, developers should learn how to properly handle SDK errors and build resilient production applications.

The next section covers advanced error handling strategies and troubleshooting techniques.



## Error Handling

Reliable applications must be prepared to handle failures gracefully.

Although Najumi Storage is designed for high availability, applications should always anticipate and properly manage unexpected situations.

Examples include:

- Authentication failures
- Invalid requests
- Missing files
- Network interruptions
- Server-side errors
- Temporary service outages

Basic Error Handling

Always wrap SDK operations inside a try/catch block.

try {
  const result =
    await storage.upload(
      './file.txt'
    );

  console.log(
    result
  );
} catch (error) {
  console.error(
    error
  );
}

Recommended Error Handling

In production environments, log useful information instead of generic errors.

try {
  const result =
    await storage.upload(
      './file.txt'
    );

  console.log(
    result
  );
} catch (error) {
  console.error(
    error.response?.data ||
    error.message
  );
}

Authentication Errors

Example response:

{
  "status": "error",
  "message":
    "missing storage credentials"
}

Possible causes:

- Missing Bucket ID.
- Missing Access Key.
- Missing Secret Key.
- Invalid credentials.
- Revoked credentials.

Recommended action:

- Verify SDK configuration.
- Verify environment variables.
- Verify bucket credentials.

File Not Found Errors

Example response:

{
  "status": "error",
  "message":
    "file not found"
}

Possible causes:

- Invalid Shield ID.
- Deleted file.
- Incorrect identifier.

Recommended action:

- Verify Shield ID.
- Verify file existence.
- Refresh cached file lists.

Access Denied Errors

Example response:

{
  "status": "error",
  "message":
    "file does not belong to bucket"
}

Possible causes:

- File belongs to another bucket.
- Wrong bucket credentials.
- Unauthorized access attempt.

Recommended action:

- Verify bucket ownership.
- Verify API credentials.
- Verify Shield ID source.

Validation Errors

Example response:

{
  "status": "error",
  "message":
    "file required"
}

Possible causes:

- Missing file.
- Invalid upload request.
- Empty form submission.

Recommended action:

- Verify upload parameters.
- Verify file path.
- Verify request construction.

Network Errors

Network failures may occur when:

- Internet connectivity is lost.
- DNS resolution fails.
- Firewalls block requests.
- The API endpoint is temporarily unreachable.

Example:

try {
  await storage.stats();
} catch (error) {
  if (
    error.code ===
    'ECONNREFUSED'
  ) {
    console.log(
      'Unable to reach Najumi Storage API'
    );
  }
}

Timeout Handling

Applications may enforce request timeouts.

Example:

try {
  const result =
    await storage.files();
} catch (error) {
  console.error(
    'Request timeout'
  );
}

Logging Errors

Production systems should maintain error logs.

Example:

try {
  await storage.upload(
    './file.txt'
  );
} catch (error) {
  console.error({
    timestamp:
      new Date(),
    message:
      error.message,
  });
}

Retry Strategy

Temporary failures may succeed on a later attempt.

Example:

async function retry(
  operation,
  attempts = 3
) {
  for (
    let i = 0;
    i < attempts;
    i++
  ) {
    try {
      return await operation();
    } catch (error) {
      if (
        i ===
        attempts - 1
      ) {
        throw error;
      }
    }
  }
}

Usage:

await retry(
  () =>
    storage.upload(
      './file.txt'
    )
);

User-Friendly Messages

Avoid exposing raw system errors directly to end users.

Bad:

AxiosError: Request failed with status code 401

Better:

Authentication failed. Please verify your storage credentials.

Production Recommendations

Always:

- Use try/catch blocks.
- Log failures.
- Validate user input.
- Retry temporary failures.
- Monitor API availability.

Avoid:

- Ignoring errors.
- Exposing secrets in logs.
- Returning raw stack traces to users.
- Assuming requests always succeed.

Troubleshooting Checklist

Before contacting support:

- Verify Bucket ID.
- Verify Access Key.
- Verify Secret Key.
- Verify network connectivity.
- Verify Shield ID.
- Verify bucket ownership.
- Verify file existence.

Many issues can be resolved through these checks.

Next Step

After understanding error handling, developers should understand the internal file organization and project structure used by the SDK.

The next section covers recommended file structures and project organization patterns.


## File Structure

Proper project organization improves maintainability, scalability, and developer productivity.

This section demonstrates recommended project structures when integrating Najumi Storage into applications.

Basic Node.js Project

Example:

my-app/
├── node_modules/
├── uploads/
├── src/
│   ├── storage/
│   │   └── client.js
│   ├── services/
│   ├── routes/
│   └── app.js
├── .env
├── package.json
└── README.md

Storage Client

Create a dedicated storage client file.

src/storage/client.js

Example:

const NajumiStorage =
require('@najumi/storage');

module.exports =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,

  accessKey:
    process.env.NAJUMI_ACCESS_KEY,

  secretKey:
    process.env.NAJUMI_SECRET_KEY,
});

This ensures a single SDK instance is used throughout the application.

Environment Variables

Store credentials inside:

.env

Example:

NAJUMI_BUCKET_ID=njs_bucket_xxxxxxxxx
NAJUMI_ACCESS_KEY=njs_acc_xxxxxxxxx
NAJUMI_SECRET_KEY=njs_sec_xxxxxxxxx

Never commit production credentials to source control.

Express Application Structure

Example:

express-app/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── storage/
│   │   └── client.js
│   └── server.js
├── .env
└── package.json

Example controller:

const storage =
require('../storage/client');

async function upload(
  req,
  res
) {
  const result =
    await storage.upload(
      './file.txt'
    );

  res.json(result);
}

Next.js Project Structure

Example:

next-app/
├── app/
├── components/
├── lib/
│   └── storage.js
├── public/
├── .env.local
├── package.json
└── next.config.js

Example:

import NajumiStorage
from '@najumi/storage';

export const storage =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,

  accessKey:
    process.env.NAJUMI_ACCESS_KEY,

  secretKey:
    process.env.NAJUMI_SECRET_KEY,
});

React Project Structure

React applications should never expose Secret Keys directly.

Recommended structure:

react-app/
├── src/
├── public/
├── backend/
│   └── storage-api/
└── package.json

Authentication should occur through a secure backend service.

Recommended Upload Directories

Example:

uploads/
├── images/
├── documents/
├── videos/
├── archives/
└── backups/

This helps keep files organized before upload.

Multi-Environment Structure

Example:

environments/
├── development/
├── staging/
└── production/

Each environment should use separate buckets and credentials.

Example:

# Development
NAJUMI_BUCKET_ID=njs_bucket_dev

# Production
NAJUMI_BUCKET_ID=njs_bucket_prod

Monorepo Structure

Example:

workspace/
├── apps/
│   ├── dashboard/
│   ├── api/
│   └── website/
├── packages/
│   └── shared-storage/
└── package.json

A shared storage package can centralize SDK configuration.

Recommended Practices

- Create a dedicated storage module.
- Use environment variables.
- Separate environments.
- Avoid duplicate SDK instances.
- Centralize credential management.
- Keep upload workflows isolated.

Avoid

Avoid structures such as:

src/
├── random-upload.js
├── upload-final.js
├── upload-new.js
├── upload-v2.js

This makes maintenance difficult as applications grow.

Next Step

After understanding project organization, developers should follow security best practices before deploying applications to production.

The next section covers credential protection, environment security, and production deployment recommendations.



## Security Best Practices

Security is a critical part of every cloud application.

Najumi Storage uses bucket-based authentication through Bucket IDs, Access Keys, and Secret Keys. These credentials grant access to storage resources and must be protected appropriately.

This section outlines recommended security practices for production deployments.

Protect Your Secret Key

Your Secret Key should be treated like a password.

Never:

- Share Secret Keys publicly.
- Commit Secret Keys to Git repositories.
- Store Secret Keys in frontend code.
- Send Secret Keys to browsers or mobile applications.
- Expose Secret Keys in logs.

Bad example:

const storage =
new NajumiStorage({
  bucketId:
    'njs_bucket_xxxxx',
  accessKey:
    'njs_acc_xxxxx',
  secretKey:
    'njs_sec_xxxxx',
});

Good example:

const storage =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,
  accessKey:
    process.env.NAJUMI_ACCESS_KEY,
  secretKey:
    process.env.NAJUMI_SECRET_KEY,
});

Use Environment Variables

Store credentials inside environment files.

Example:

NAJUMI_BUCKET_ID=njs_bucket_xxxxx
NAJUMI_ACCESS_KEY=njs_acc_xxxxx
NAJUMI_SECRET_KEY=njs_sec_xxxxx

Never hardcode production credentials inside application source files.

Keep Credentials Server-Side

Najumi Storage SDK is designed primarily for secure server-side environments.

Recommended:

- Node.js
- Express
- NestJS
- Next.js API Routes
- Fastify
- Backend Services
- Serverless Functions

Avoid exposing Secret Keys inside:

- React Components
- Vue Components
- Angular Components
- Browser JavaScript
- Public Repositories

Use HTTPS

Always communicate with Najumi Storage through HTTPS.

Recommended:

https://storage-api.najumitech.com

Avoid:

http://storage-api.najumitech.com

HTTPS protects:

- Credentials
- Uploaded files
- Metadata
- API requests

Separate Development and Production Buckets

Use different buckets for different environments.

Example:

Development Bucket
Production Bucket
Testing Bucket

This reduces the risk of accidental data loss.

Rotate Credentials Regularly

Periodically regenerate Access Keys and Secret Keys.

Recommended situations:

- Team member leaves.
- Credential exposure suspected.
- Security audit completed.
- Production incident occurs.

Credential rotation reduces long-term risk.

Apply Principle of Least Privilege

Only distribute credentials to systems that require them.

Avoid sharing bucket credentials with:

- Unrelated services
- Temporary contractors
- Client-side applications

Limit access whenever possible.

Validate Uploaded Files

Before uploading files:

- Validate file size.
- Validate file type.
- Validate file extension.
- Scan files when necessary.

Example:

const allowed =
[
  'image/png',
  'image/jpeg',
  'application/pdf',
];

if (
  !allowed.includes(
    file.mimetype
  )
) {
  throw new Error(
    'Invalid file type'
  );
}

Limit File Sizes

Large uploads can consume storage and bandwidth unnecessarily.

Example:

const maxSize =
10 * 1024 * 1024;

if (
  file.size >
  maxSize
) {
  throw new Error(
    'File too large'
  );
}

Monitor Storage Usage

Regularly review:

- Total files
- Storage consumption
- Bandwidth usage
- Upload activity

Example:

const stats =
await storage.stats();

console.log(
  stats.totalStorageUsed
);

Monitoring helps detect abnormal activity early.

Protect Sensitive Files

For sensitive business documents:

- Encrypt files before upload.
- Restrict internal access.
- Maintain audit logs.
- Review access policies regularly.

Sensitive information should never rely solely on storage authentication.

Secure CI/CD Pipelines

When deploying applications:

Store credentials in:

- GitHub Actions Secrets
- GitLab CI Variables
- Cloud Secret Managers
- Encrypted Environment Variables

Never store secrets directly inside deployment scripts.

Log Responsibly

Avoid logging credentials.

Bad:

console.log(
  process.env
);

Good:

console.log(
  'Storage initialized'
);

Logs should never expose authentication data.

Incident Response

If credentials are exposed:

1. Revoke affected credentials.
2. Generate new credentials.
3. Update all applications.
4. Review recent activity.
5. Audit access logs.

Respond immediately to minimize risk.

Security Checklist

Before production deployment:

- Credentials stored in environment variables.
- HTTPS enabled.
- Separate production bucket created.
- Upload validation implemented.
- Logging reviewed.
- Access restricted.
- Backup strategy prepared.
- Monitoring configured.

Next Step

Now that security practices are covered, the next section demonstrates complete real-world integration examples.

The next section is:

## Examples

This section will include practical examples for:

- Basic Upload
- Upload and Delete
- Express API Integration
- Next.js Integration
- Batch Uploads
- Error Handling Patterns
- Production Workflows



## Examples


Examples provide practical demonstrations of how to use the Najumi Storage SDK in real-world applications.

The following examples cover the most common integration scenarios.

Basic Initialization

const NajumiStorage =
require('@najumi/storage');

const storage =
new NajumiStorage({
  bucketId:
    process.env.NAJUMI_BUCKET_ID,

  accessKey:
    process.env.NAJUMI_ACCESS_KEY,

  secretKey:
    process.env.NAJUMI_SECRET_KEY,

  baseUrl:
    'https://storage-api.najumitech.com',
});

Get Bucket Statistics

const stats =
await storage.stats();

console.log(stats);

Example response:

{
  "status": "success",
  "bucketId": "njs_bucket_xxxxx",
  "totalFiles": 12,
  "totalStorageUsed": 1048576
}

Upload a File

const result =
await storage.upload(
  './document.pdf'
);

console.log(result);

Example response:

{
  "status": "success",
  "shield": "ns_1780401847069",
  "fileId": "6a1ec6b72eb0642b05265a2f"
}

List Files

const files =
await storage.files();

console.log(files);

Example:

files.files.forEach(
  (file) => {
    console.log(
      file.name
    );
  }
);

Download a File

await storage.download(
  'ns_1780401847069',
  './downloaded.pdf'
);

Delete a File

await storage.delete(
  'ns_1780401847069'
);

Upload Then Delete

const upload =
await storage.upload(
  './report.pdf'
);

await storage.delete(
  upload.shield
);

Express.js Example

const express =
require('express');

const storage =
require('./storage');

const app =
express();

app.post(
  '/upload',
  async (
    req,
    res
  ) => {
    try {
      const result =
        await storage.upload(
          './file.pdf'
        );

      res.json(
        result
      );
    } catch (error) {
      res.status(500)
        .json({
          error:
            error.message,
        });
    }
  }
);

Next.js API Route Example

import storage
from '@/lib/storage';

export async function POST() {
  const result =
    await storage.stats();

  return Response.json(
    result
  );
}

Batch Upload Example

const files = [
  './a.pdf',
  './b.pdf',
  './c.pdf',
];

for (
  const file
  of files
) {
  await storage.upload(
    file
  );
}

Error Handling Example

try {
  const result =
    await storage.upload(
      './file.pdf'
    );

  console.log(
    result
  );
} catch (error) {
  console.error(
    error.response?.data ||
    error.message
  );
}

Production Example

async function backup() {
  const result =
    await storage.upload(
      './database-backup.zip'
    );

  console.log(
    'Backup uploaded:',
    result.shield
  );
}

backup();

Common Workflow

Typical application flow:

1. Initialize SDK.
2. Authenticate using bucket credentials.
3. Upload files.
4. Store returned Shield IDs.
5. List files when needed.
6. Download files.
7. Delete obsolete files.
8. Monitor storage usage.

Next Step

The next section provides a complete reference for every SDK method, parameter, and return value.



## API Reference

The API Reference section provides a complete overview of all public SDK methods.

Constructor

Creates a new Najumi Storage client instance.

Syntax

const storage =
new NajumiStorage({
  bucketId:
    'YOUR_BUCKET_ID',

  accessKey:
    'YOUR_ACCESS_KEY',

  secretKey:
    'YOUR_SECRET_KEY',

  baseUrl:
    'https://storage-api.najumitech.com',
});

Parameters

Parameter| Type| Required| Description
bucketId| string| Yes| Bucket identifier
accessKey| string| Yes| Bucket access key
secretKey| string| Yes| Bucket secret key
baseUrl| string| No| Custom API endpoint

Returns

NajumiStorage

---

stats()

Returns bucket statistics.

Syntax

const result =
await storage.stats();

Parameters

None.

Returns

{
  "status": "success",
  "bucketId": "njs_bucket_xxxxx",
  "bucketName": "My Bucket",
  "totalFiles": 10,
  "totalStorageUsed": 1048576,
  "totalBandwidthUsed": 2048,
  "visibility": "public",
  "region": "global"
}

---

files()

Returns files belonging to the authenticated bucket.

Syntax

const result =
await storage.files();

Parameters

None.

Returns

{
  "status": "success",
  "count": 10,
  "files": []
}

---

upload()

Uploads a file to Najumi Storage.

Syntax

const result =
await storage.upload(
  './file.pdf'
);

Parameters

Parameter| Type| Required| Description
filePath| string| Yes| Local file path
path| string| No| Virtual storage path

Example

await storage.upload(
  './report.pdf',
  '/'
);

Returns

{
  "status": "success",
  "fileId": "6a1ec6b72eb0642b05265a2f",
  "shield": "ns_1780401847069",
  "bucketId": "njs_bucket_xxxxx"
}

---

download()

Downloads a file from Najumi Storage.

Syntax

await storage.download(
  'ns_1780401847069',
  './downloaded.pdf'
);

Parameters

Parameter| Type| Required| Description
shield| string| Yes| File Shield ID
outputPath| string| Yes| Local destination path

Returns

Promise<void>

---

delete()

Deletes a file.

Syntax

await storage.delete(
  'ns_1780401847069'
);

Parameters

Parameter| Type| Required| Description
shield| string| Yes| File Shield ID

Returns

{
  "status": "success",
  "deleted": true,
  "shield": "ns_1780401847069"
}

---

Error Responses

All methods may return:

{
  "status": "error",
  "message": "description"
}

Common messages include:

missing storage credentials
authentication failed
file required
file not found
file does not belong to bucket
upload failed
download failed
delete failed

---

Promise Support

All SDK methods are asynchronous and return Promises.

Example:

const result =
await storage.stats();

or

storage
  .stats()
  .then(console.log)
  .catch(console.error);

---

SDK Methods Summary

Method| Description
stats()| Bucket statistics
files()| List bucket files
upload()| Upload file
download()| Download file
delete()| Delete file

Next Step

If you need assistance, bug reports, feature requests, or integration support, see the Support section.


## Support
Najumi Tech is committed to providing reliable support and continuous improvements for Najumi Storage.

If you encounter issues, have questions, or would like to request new features, several support options are available.

Documentation

Before requesting support, review the documentation carefully.

Most common questions regarding:

- Bucket creation
- API keys
- Authentication
- Uploads
- Downloads
- File management
- SDK integration

are already covered in this guide.

Bug Reports

If you discover a bug, please include:

- SDK version
- Node.js version
- Operating system
- Error message
- Reproduction steps
- Relevant code snippets

Providing detailed information helps the team resolve issues faster.

Example:

SDK Version: 1.0.0
Node.js Version: 22.x
Platform: Ubuntu 24.04
Issue: Upload request fails
Error: file required

Feature Requests

We welcome feature suggestions.

Examples:

- New SDK methods
- Additional programming languages
- Framework integrations
- Performance improvements
- Developer experience enhancements

Feature requests help shape the future roadmap of Najumi Storage.

Security Reports

If you discover a security vulnerability:

- Do not disclose it publicly.
- Contact Najumi Tech directly.
- Provide detailed reproduction information.
- Allow reasonable time for investigation and remediation.

Responsible disclosure helps protect all users.

Community Support

Developers can share:

- Integration examples
- Tutorials
- Best practices
- Troubleshooting tips
- Open-source tools

Community contributions strengthen the Najumi ecosystem.

Commercial Support

Organizations running production workloads may require dedicated support.

Commercial support may include:

- Deployment guidance
- Integration assistance
- Architecture reviews
- Priority issue handling
- Enterprise consultations

Availability may vary depending on service plans.

Staying Updated

To receive updates:

- Follow Najumi Tech announcements.
- Monitor SDK releases.
- Review release notes before upgrading.
- Test new versions in development environments before production deployment.

Contact Information

Official Support:

Najumi Tech
Email: support@najumitech.com
Website: https://najumitech.com
Storage API: https://storage-api.najumitech.com

Support Checklist

Before contacting support, verify:

- Bucket ID is correct.
- Access Key is correct.
- Secret Key is correct.
- Internet connection is working.
- Latest SDK version is installed.
- Documentation has been reviewed.

Many issues can be resolved through these checks.

Final Section

The next section contains licensing information governing the use and distribution of the Najumi Storage SDK.



## License

Najumi Storage SDK is licensed under the MIT License.

Copyright (c) 2026 Najumi Tech.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the conditions outlined below.

Permissions

The MIT License permits:

- Commercial use
- Private use
- Modification
- Distribution
- Sub-licensing
- Internal business use

Developers and organizations may integrate the SDK into personal, commercial, open-source, or enterprise applications.

Conditions

The following condition must be met:

- The original copyright notice and license notice must be included in all copies or substantial portions of the Software.

Limitations

The Software is provided "as is", without warranty of any kind.

Najumi Tech makes no guarantees regarding:

- Continuous availability
- Fitness for a particular purpose
- Non-infringement
- Error-free operation

Users assume responsibility for evaluating and using the Software.

Liability

In no event shall Najumi Tech or its contributors be liable for any claim, damages, or other liability arising from:

- Use of the Software
- Inability to use the Software
- Data loss
- Service interruptions
- Security incidents
- Business losses

Third-Party Components

The SDK may include or depend on third-party open-source software.

Such components remain subject to their respective licenses.

Examples include:

- Axios
- FormData
- Node.js Runtime

Developers are responsible for reviewing applicable third-party licenses when required.

Trademark Notice

Najumi, Najumi Storage, Najumi Tech, and related branding may be protected by applicable trademark laws.

This license does not grant permission to use Najumi trademarks, logos, brand assets, or marketing materials without authorization.

Updates

Najumi Tech may publish future SDK versions with additional functionality, improvements, bug fixes, and security updates.

License terms for future releases may differ and should be reviewed before upgrading.

Official Resources

Najumi Tech

Website:
https://najumitech.com

Storage API:
https://storage-api.najumitech.com

Summary

Najumi Storage SDK is released under the MIT License, allowing developers and organizations to build, modify, distribute, and integrate applications with minimal restrictions while retaining the required copyright notice.

Thank you for using Najumi Storage.

Built with ❤️ by Najumi Tech.
