# @athena-ai/sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@athena-ai/sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@athena-ai/sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasy.com/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasy.com/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [brain](docs/sdks/brain/README.md)

* [createBrain](docs/sdks/brain/README.md#createbrain) - Create Brain
* [getBrains](docs/sdks/brain/README.md#getbrains) - Get All Brains
* [createTextDocument](docs/sdks/brain/README.md#createtextdocument) - Create Text Document
* [createDocumentWithUrl](docs/sdks/brain/README.md#createdocumentwithurl) - Create Document by URL
* [updateBrain](docs/sdks/brain/README.md#updatebrain) - Update Brain
* [getBrain](docs/sdks/brain/README.md#getbrain) - Get Brain by ID
* [deleteBrain](docs/sdks/brain/README.md#deletebrain) - Delete Brain
* [getDocuments](docs/sdks/brain/README.md#getdocuments) - List Documents
* [uploadDocument](docs/sdks/brain/README.md#uploaddocument) - Upload Document
* [searchDocuments](docs/sdks/brain/README.md#searchdocuments) - Search documents

### [chat](docs/sdks/chat/README.md)

* [createChatThread](docs/sdks/chat/README.md#createchatthread) - Create New Chat Thread
* [listChatThreads](docs/sdks/chat/README.md#listchatthreads) - List Chat Threads
* [getChatThread](docs/sdks/chat/README.md#getchatthread) - Get Chat Thread
* [updateChatThread](docs/sdks/chat/README.md#updatechatthread) - Update Chat Thread
* [deleteChatThread](docs/sdks/chat/README.md#deletechatthread) - Delete Chat Thread
* [createChatThreadWithMsg](docs/sdks/chat/README.md#createchatthreadwithmsg) - Create New Chat Thread With Message
* [sendChatMessage](docs/sdks/chat/README.md#sendchatmessage) - Send Chat Message
* [getChat](docs/sdks/chat/README.md#getchat) - Get Chat Interactions

### [chatbot](docs/sdks/chatbot/README.md)

* [postChatbotCreate](docs/sdks/chatbot/README.md#postchatbotcreate) - Create Chatbot
* [getChatbotList](docs/sdks/chatbot/README.md#getchatbotlist) - List Chatbots
* [postChatbotGet](docs/sdks/chatbot/README.md#postchatbotget) - Get Chatbot
* [getChatbotAnalytics](docs/sdks/chatbot/README.md#getchatbotanalytics) - Get Chatbot analytics
* [getChatbotGetMessages](docs/sdks/chatbot/README.md#getchatbotgetmessages) - Get Chatbot messages
* [postChatbotUpdate](docs/sdks/chatbot/README.md#postchatbotupdate) - Update Chatbot
* [postChatbotDelete](docs/sdks/chatbot/README.md#postchatbotdelete) - Delete Chatbot
* [postChatbotReset](docs/sdks/chatbot/README.md#postchatbotreset) - Reset Token

### [document](docs/sdks/document/README.md)

* [downloadDocument](docs/sdks/document/README.md#downloaddocument) - Download
* [getDocument](docs/sdks/document/README.md#getdocument) - Get Document
* [deleteDocument](docs/sdks/document/README.md#deletedocument) - Delete Document
* [createDocumentReview](docs/sdks/document/README.md#createdocumentreview) - Create document review
* [listDocumentReviews](docs/sdks/document/README.md#listdocumentreviews) - List document reviews

### [integration](docs/sdks/integration/README.md)

* [postIntegrationIntegrationNameConnect](docs/sdks/integration/README.md#postintegrationintegrationnameconnect) - Connect
* [postIntegrationIntegrationNameDisconnect](docs/sdks/integration/README.md#postintegrationintegrationnamedisconnect) - Disconnect
* [getIntegrationIntegrationNameList](docs/sdks/integration/README.md#getintegrationintegrationnamelist) - List
* [postIntegrationIntegrationNameAdd](docs/sdks/integration/README.md#postintegrationintegrationnameadd) - Add To Brain

### [ogranisation](docs/sdks/ogranisation/README.md)

* [getOrganisation](docs/sdks/ogranisation/README.md#getorganisation) - get user org

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [brainCreateBrain](docs/sdks/brain/README.md#createbrain)
- [brainCreateDocumentWithUrl](docs/sdks/brain/README.md#createdocumentwithurl)
- [brainCreateTextDocument](docs/sdks/brain/README.md#createtextdocument)
- [brainDeleteBrain](docs/sdks/brain/README.md#deletebrain)
- [brainGetBrain](docs/sdks/brain/README.md#getbrain)
- [brainGetBrains](docs/sdks/brain/README.md#getbrains)
- [brainGetDocuments](docs/sdks/brain/README.md#getdocuments)
- [brainSearchDocuments](docs/sdks/brain/README.md#searchdocuments)
- [brainUpdateBrain](docs/sdks/brain/README.md#updatebrain)
- [brainUploadDocument](docs/sdks/brain/README.md#uploaddocument)
- [chatCreateChatThreadWithMsg](docs/sdks/chat/README.md#createchatthreadwithmsg)
- [chatCreateChatThread](docs/sdks/chat/README.md#createchatthread)
- [chatDeleteChatThread](docs/sdks/chat/README.md#deletechatthread)
- [chatGetChatThread](docs/sdks/chat/README.md#getchatthread)
- [chatGetChat](docs/sdks/chat/README.md#getchat)
- [chatListChatThreads](docs/sdks/chat/README.md#listchatthreads)
- [chatSendChatMessage](docs/sdks/chat/README.md#sendchatmessage)
- [chatUpdateChatThread](docs/sdks/chat/README.md#updatechatthread)
- [chatbotGetChatbotAnalytics](docs/sdks/chatbot/README.md#getchatbotanalytics)
- [chatbotGetChatbotGetMessages](docs/sdks/chatbot/README.md#getchatbotgetmessages)
- [chatbotGetChatbotList](docs/sdks/chatbot/README.md#getchatbotlist)
- [chatbotPostChatbotCreate](docs/sdks/chatbot/README.md#postchatbotcreate)
- [chatbotPostChatbotDelete](docs/sdks/chatbot/README.md#postchatbotdelete)
- [chatbotPostChatbotGet](docs/sdks/chatbot/README.md#postchatbotget)
- [chatbotPostChatbotReset](docs/sdks/chatbot/README.md#postchatbotreset)
- [chatbotPostChatbotUpdate](docs/sdks/chatbot/README.md#postchatbotupdate)
- [documentCreateDocumentReview](docs/sdks/document/README.md#createdocumentreview)
- [documentDeleteDocument](docs/sdks/document/README.md#deletedocument)
- [documentDownloadDocument](docs/sdks/document/README.md#downloaddocument)
- [documentGetDocument](docs/sdks/document/README.md#getdocument)
- [documentListDocumentReviews](docs/sdks/document/README.md#listdocumentreviews)
- [integrationGetIntegrationIntegrationNameList](docs/sdks/integration/README.md#getintegrationintegrationnamelist)
- [integrationPostIntegrationIntegrationNameAdd](docs/sdks/integration/README.md#postintegrationintegrationnameadd)
- [integrationPostIntegrationIntegrationNameConnect](docs/sdks/integration/README.md#postintegrationintegrationnameconnect)
- [integrationPostIntegrationIntegrationNameDisconnect](docs/sdks/integration/README.md#postintegrationintegrationnamedisconnect)
- [ogranisationGetOrganisation](docs/sdks/ogranisation/README.md#getorganisation)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Acp } from "@athena-ai/sdk";
import { openAsBlob } from "node:fs";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.uploadDocument({
    brainId: "",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createBrain({
    name: "Test - brain",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.UploadDocumentResponseBody      | 400                                    | application/json                       |
| errors.UploadDocumentBrainResponseBody | 500                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Acp } from "@athena-ai/sdk";
import {
  SDKValidationError,
  UploadDocumentBrainResponseBody,
  UploadDocumentResponseBody,
} from "@athena-ai/sdk/models/errors";
import { openAsBlob } from "node:fs";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  let result;
  try {
    result = await acp.brain.uploadDocument({
      brainId: "",
      requestBody: {
        file: await openAsBlob("example.file"),
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof UploadDocumentResponseBody): {
        // Handle err.data$: UploadDocumentResponseBodyData
        console.error(err);
        return;
      }
      case (err instanceof UploadDocumentBrainResponseBody): {
        // Handle err.data$: UploadDocumentBrainResponseBodyData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://stage-api.athenacopilot.ai` | None |
| 1 | `http://backend.athenacopilot.ai` | None |

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  serverIdx: 1,
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  serverURL: "https://stage-api.athenacopilot.ai",
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Acp } from "@athena-ai/sdk";
import { HTTPClient } from "@athena-ai/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Acp({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                          | Type                          | Scheme                        | Environment Variable          |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `username` `password`         | http                          | HTTP Basic                    | `ACP_USERNAME` `ACP_PASSWORD` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Acp } from "@athena-ai/sdk";

const sdk = new Acp({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ACP_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@athena-ai/sdk&utm_campaign=typescript)
