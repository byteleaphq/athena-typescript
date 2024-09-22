# ChatMessages

## Example Usage

```typescript
import { ChatMessages } from "@athena-ai/sdk/models/components";

let value: ChatMessages = {
  actor: "USER",
  createdAt: "2024-05-20T06:46:09.010233+00:00",
  id: 461,
  message: "hi",
  threadId: "7c621be0-96d8-4ecc-9149-74d0ff94f106",
  timestamp: null,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `actor`                                                | *string*                                               | :heavy_minus_sign:                                     | The actor of the message, either USER or AI            | USER                                                   |
| `createdAt`                                            | *string*                                               | :heavy_minus_sign:                                     | The timestamp when the message was created             | 2024-05-20T06:46:09.010233+00:00                       |
| `id`                                                   | *number*                                               | :heavy_minus_sign:                                     | The ID of the message                                  | 461                                                    |
| `message`                                              | *string*                                               | :heavy_minus_sign:                                     | The content of the message                             | hi                                                     |
| `reference`                                            | *components.ChatbotMessagesReference*[]                | :heavy_minus_sign:                                     | The list of references associated with the interaction |                                                        |
| `threadId`                                             | *string*                                               | :heavy_minus_sign:                                     | The ID of the thread the message belongs to            | 7c621be0-96d8-4ecc-9149-74d0ff94f106                   |
| `timestamp`                                            | *string*                                               | :heavy_minus_sign:                                     | The timestamp of the message, if available             | <nil>                                                  |