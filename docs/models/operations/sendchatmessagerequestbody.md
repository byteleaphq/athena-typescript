# SendChatMessageRequestBody

## Example Usage

```typescript
import { SendChatMessageRequestBody } from "@isosceles-ai/sdk/models/operations";

let value: SendChatMessageRequestBody = {
  chatThreadId: "d504386d-6cba-4e38-96f0-aa16b83e1cd8",
  text: "hi",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `chatThreadId`                               | *string*                                     | :heavy_minus_sign:                           | ID of chat to which you want to send message |
| `text`                                       | *string*                                     | :heavy_minus_sign:                           | message                                      |
| `documents`                                  | *string*[]                                   | :heavy_minus_sign:                           | Array of document ids                        |