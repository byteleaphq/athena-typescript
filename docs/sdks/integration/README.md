# Integration
(*integration*)

## Overview

### Available Operations

* [postIntegrationIntegrationNameConnect](#postintegrationintegrationnameconnect) - Connect
* [postIntegrationIntegrationNameDisconnect](#postintegrationintegrationnamedisconnect) - Disconnect
* [getIntegrationIntegrationNameList](#getintegrationintegrationnamelist) - List
* [postIntegrationIntegrationNameAdd](#postintegrationintegrationnameadd) - Add To Brain

## postIntegrationIntegrationNameConnect

Connect

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
  const result = await acp.integration.postIntegrationIntegrationNameConnect({
    integrationName: "notion",
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
import { integrationPostIntegrationIntegrationNameConnect } from "@athena-ai/sdk/funcs/integrationPostIntegrationIntegrationNameConnect.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await integrationPostIntegrationIntegrationNameConnect(acp, {
    integrationName: "notion",
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
| `request`                                                                                                                                                                      | [operations.PostIntegrationIntegrationNameConnectRequest](../../models/operations/postintegrationintegrationnameconnectrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostIntegrationIntegrationNameConnectResponseBody](../../models/operations/postintegrationintegrationnameconnectresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## postIntegrationIntegrationNameDisconnect

Disconnect

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
  const result = await acp.integration.postIntegrationIntegrationNameDisconnect({
    integrationName: "notion",
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
import { integrationPostIntegrationIntegrationNameDisconnect } from "@athena-ai/sdk/funcs/integrationPostIntegrationIntegrationNameDisconnect.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await integrationPostIntegrationIntegrationNameDisconnect(acp, {
    integrationName: "notion",
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
| `request`                                                                                                                                                                      | [operations.PostIntegrationIntegrationNameDisconnectRequest](../../models/operations/postintegrationintegrationnamedisconnectrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostIntegrationIntegrationNameDisconnectResponseBody](../../models/operations/postintegrationintegrationnamedisconnectresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getIntegrationIntegrationNameList

list pages from integration

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
  const result = await acp.integration.getIntegrationIntegrationNameList({
    integrationName: "confluence",
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
import { integrationGetIntegrationIntegrationNameList } from "@athena-ai/sdk/funcs/integrationGetIntegrationIntegrationNameList.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await integrationGetIntegrationIntegrationNameList(acp, {
    integrationName: "confluence",
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
| `request`                                                                                                                                                                      | [operations.GetIntegrationIntegrationNameListRequest](../../models/operations/getintegrationintegrationnamelistrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResponseBody[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## postIntegrationIntegrationNameAdd

used to add pages to brain

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
  const result = await acp.integration.postIntegrationIntegrationNameAdd({
    integrationName: "notion",
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
import { integrationPostIntegrationIntegrationNameAdd } from "@athena-ai/sdk/funcs/integrationPostIntegrationIntegrationNameAdd.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await integrationPostIntegrationIntegrationNameAdd(acp, {
    integrationName: "notion",
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
| `request`                                                                                                                                                                      | [operations.PostIntegrationIntegrationNameAddRequest](../../models/operations/postintegrationintegrationnameaddrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostIntegrationIntegrationNameAddResponseBody](../../models/operations/postintegrationintegrationnameaddresponsebody.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
