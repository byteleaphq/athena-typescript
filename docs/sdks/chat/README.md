# Chat
(*chat*)

## Overview

### Available Operations

* [createChatThread](#createchatthread) - Create New Chat Thread
* [listChatThreads](#listchatthreads) - List Chat Threads
* [getChatThread](#getchatthread) - Get Chat Thread
* [updateChatThread](#updatechatthread) - Update Chat Thread
* [deleteChatThread](#deletechatthread) - Delete Chat Thread
* [createChatThreadWithMsg](#createchatthreadwithmsg) - Create New Chat Thread With Message
* [sendChatMessage](#sendchatmessage) - Send Chat Message
* [getChat](#getchat) - Get Chat Interactions

## createChatThread

Create a new chat instance

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
  const result = await acp.chat.createChatThread({
    brainId: "e46c625f-9057-4e0c-88ba-3a27d0c34748",
    name: "Test API Chat Thread",
    integration: "files",
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
import { chatCreateChatThread } from "@athena-ai/sdk/funcs/chatCreateChatThread.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatCreateChatThread(acp, {
    brainId: "e46c625f-9057-4e0c-88ba-3a27d0c34748",
    name: "Test API Chat Thread",
    integration: "files",
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
| `request`                                                                                                                                                                      | [operations.CreateChatThreadRequestBody](../../models/operations/createchatthreadrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Chat](../../models/components/chat.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## listChatThreads

List chat threads for the current user id

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
  const result = await acp.chat.listChatThreads();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcpCore } from "@athena-ai/sdk/core.js";
import { chatListChatThreads } from "@athena-ai/sdk/funcs/chatListChatThreads.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatListChatThreads(acp);

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

**Promise\<[components.Chat[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getChatThread

Get Chat Thread

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
  const result = await acp.chat.getChatThread({
    chatId: "{{chat_id}}",
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
import { chatGetChatThread } from "@athena-ai/sdk/funcs/chatGetChatThread.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatGetChatThread(acp, {
    chatId: "{{chat_id}}",
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
| `request`                                                                                                                                                                      | [operations.GetChatThreadRequest](../../models/operations/getchatthreadrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Chat](../../models/components/chat.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## updateChatThread

Update Chat Thread

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
  const result = await acp.chat.updateChatThread({
    chatId: "{{chat_id}}",
    requestBody: {
      temperature: 0.3,
      name: "Updated name",
      systemMessage: "You are a customer support bot for ByteLeap.",
      additionalProperties: {
  
      },
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
import { chatUpdateChatThread } from "@athena-ai/sdk/funcs/chatUpdateChatThread.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatUpdateChatThread(acp, {
    chatId: "{{chat_id}}",
    requestBody: {
      temperature: 0.3,
      name: "Updated name",
      systemMessage: "You are a customer support bot for ByteLeap.",
      additionalProperties: {
  
      },
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
| `request`                                                                                                                                                                      | [operations.UpdateChatThreadRequest](../../models/operations/updatechatthreadrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Chat](../../models/components/chat.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## deleteChatThread

Delete Chat Thread

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
  const result = await acp.chat.deleteChatThread({
    chatId: "8474f310-a2a9-4cf8-b16f-8d01a5a6b5fa",
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
import { chatDeleteChatThread } from "@athena-ai/sdk/funcs/chatDeleteChatThread.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatDeleteChatThread(acp, {
    chatId: "8474f310-a2a9-4cf8-b16f-8d01a5a6b5fa",
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
| `request`                                                                                                                                                                      | [operations.DeleteChatThreadRequest](../../models/operations/deletechatthreadrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Chat](../../models/components/chat.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## createChatThreadWithMsg

Create a new chat with the specified brain and message.

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
  const result = await acp.chat.createChatThreadWithMsg({
    brainId: "<value>",
    name: "Slack Chat - 2024-06-26T12:34:56.789Z",
    message: "<value>",
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
import { chatCreateChatThreadWithMsg } from "@athena-ai/sdk/funcs/chatCreateChatThreadWithMsg.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatCreateChatThreadWithMsg(acp, {
    brainId: "<value>",
    name: "Slack Chat - 2024-06-26T12:34:56.789Z",
    message: "<value>",
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
| `request`                                                                                                                                                                      | [operations.CreateChatThreadWithMsgRequestBody](../../models/operations/createchatthreadwithmsgrequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatInteraction[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## sendChatMessage

Send Chat Message

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
  const result = await acp.chat.sendChatMessage({
    chatThreadId: "6b6a092d-8f6e-48e8-bde8-b013a211b6ae",
    text: "What is the customer motto of Amazon in one line",
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
import { chatSendChatMessage } from "@athena-ai/sdk/funcs/chatSendChatMessage.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatSendChatMessage(acp, {
    chatThreadId: "6b6a092d-8f6e-48e8-bde8-b013a211b6ae",
    text: "What is the customer motto of Amazon in one line",
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
| `request`                                                                                                                                                                      | [operations.SendChatMessageRequestBody](../../models/operations/sendchatmessagerequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatInteraction[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getChat

Get Chat Interactions

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
  const result = await acp.chat.getChat({
    chatId: "<value>",
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
import { chatGetChat } from "@athena-ai/sdk/funcs/chatGetChat.js";

// Use `AcpCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acp = new AcpCore({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const res = await chatGetChat(acp, {
    chatId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetChatRequest](../../models/operations/getchatrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatInteraction[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
