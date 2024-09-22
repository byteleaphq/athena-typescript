# Brain
(*brain*)

## Overview

### Available Operations

* [createBrain](#createbrain) - Create Brain
* [getBrains](#getbrains) - Get All Brains
* [createTextDocument](#createtextdocument) - Create Text Document
* [createDocumentWithUrl](#createdocumentwithurl) - Create Document by URL
* [updateBrain](#updatebrain) - Update Brain
* [getBrain](#getbrain) - Get Brain by ID
* [deleteBrain](#deletebrain) - Delete Brain
* [getDocuments](#getdocuments) - List Documents
* [uploadDocument](#uploaddocument) - Upload Document
* [searchDocuments](#searchdocuments) - Search documents

## createBrain

Create Brain

### Example Usage

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
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainCreateBrain } from "@athena-ai/sdk/funcs/brainCreateBrain.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainCreateBrain(acp, {
    name: "Test - brain",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBrainRequestBody](../../models/operations/createbrainrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Brain](../../models/components/brain.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getBrains

Get All Brains

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.getBrains();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainGetBrains } from "@athena-ai/sdk/funcs/brainGetBrains.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainGetBrains(acp);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Brain[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## createTextDocument

Create documents in a brain with plain text representation

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createTextDocument({
    brainId: "{{brain_id}}",
    requestBody: {
      content: "What is an operating system? An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer............",
      title: "oslecture3",
    },
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainCreateTextDocument } from "@athena-ai/sdk/funcs/brainCreateTextDocument.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainCreateTextDocument(acp, {
    brainId: "{{brain_id}}",
    requestBody: {
      content: "What is an operating system? An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer............",
      title: "oslecture3",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTextDocumentRequest](../../models/operations/createtextdocumentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Document](../../models/components/document.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## createDocumentWithUrl

Create Document by URL

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createDocumentWithUrl({
    brainId: "{{brain_id}}",
    requestBody: {},
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainCreateDocumentWithUrl } from "@athena-ai/sdk/funcs/brainCreateDocumentWithUrl.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainCreateDocumentWithUrl(acp, {
    brainId: "{{brain_id}}",
    requestBody: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDocumentWithUrlRequest](../../models/operations/createdocumentwithurlrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Document](../../models/components/document.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## updateBrain

Update Brain

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.updateBrain({
    brainId: "",
    requestBody: {
      name: "Test Updated Brain",
    },
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainUpdateBrain } from "@athena-ai/sdk/funcs/brainUpdateBrain.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainUpdateBrain(acp, {
    brainId: "",
    requestBody: {
      name: "Test Updated Brain",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBrainRequest](../../models/operations/updatebrainrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Brain](../../models/components/brain.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getBrain

Get Brain by ID

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.getBrain({
    brainId: "{{brain_id}}",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainGetBrain } from "@athena-ai/sdk/funcs/brainGetBrain.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainGetBrain(acp, {
    brainId: "{{brain_id}}",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBrainRequest](../../models/operations/getbrainrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Brain](../../models/components/brain.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## deleteBrain

Delete Brain

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.deleteBrain({
    brainId: "{{brain_id}}",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainDeleteBrain } from "@athena-ai/sdk/funcs/brainDeleteBrain.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainDeleteBrain(acp, {
    brainId: "{{brain_id}}",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBrainRequest](../../models/operations/deletebrainrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DeleteResponse](../../models/components/deleteresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getDocuments

List Documents

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.getDocuments({
    brainId: "{{brain_id}}",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainGetDocuments } from "@athena-ai/sdk/funcs/brainGetDocuments.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainGetDocuments(acp, {
    brainId: "{{brain_id}}",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDocumentsRequest](../../models/operations/getdocumentsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Document[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## uploadDocument

Upload Document

### Example Usage

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
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainUploadDocument } from "@athena-ai/sdk/funcs/brainUploadDocument.js";
import { openAsBlob } from "node:fs";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainUploadDocument(acp, {
    brainId: "",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadDocumentRequest](../../models/operations/uploaddocumentrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Document](../../models/components/document.md)\>**

### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.UploadDocumentResponseBody      | 400                                    | application/json                       |
| errors.UploadDocumentBrainResponseBody | 500                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |


## searchDocuments

Search for documents within a specific brain

### Example Usage

```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.searchDocuments({
    brainId: "",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { brainSearchDocuments } from "@athena-ai/sdk/funcs/brainSearchDocuments.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await brainSearchDocuments(acp, {
    brainId: "",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchDocumentsRequest](../../models/operations/searchdocumentsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Document[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
