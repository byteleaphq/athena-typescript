# PostChatbotCreateRequestBody

## Example Usage

```typescript
import { PostChatbotCreateRequestBody } from "@isosceles-ai/sdk/models/operations";

let value: PostChatbotCreateRequestBody = {
  name: "Chatbot -1",
  brainId: "1f1d7a6a-e45b-4974-a0ba-98935650cb9c",
  urls: [
    "https://byteleap.co",
    "https://ayushgoyal.dev",
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *string*                                        | :heavy_check_mark:                              | The name of the chatbot                         | Chatbot -1                                      |
| `brainId`                                       | *string*                                        | :heavy_check_mark:                              | The ID of the brain associated with the chatbot | 1f1d7a6a-e45b-4974-a0ba-98935650cb9c            |
| `urls`                                          | *string*[]                                      | :heavy_check_mark:                              | N/A                                             |                                                 |