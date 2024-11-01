# PostChatbotUpdateRequestBody

## Example Usage

```typescript
import { PostChatbotUpdateRequestBody } from "@isosceles-ai/sdk/models/operations";

let value: PostChatbotUpdateRequestBody = {
  chatbotId: "1a718a80-71c0-414b-915c-5c5991597ac7",
  name: "Chatbot -1",
  urls: [
    "https://byteleap.co",
    "https://anshgoyal.com",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `chatbotId`             | *string*                | :heavy_minus_sign:      | The id of the chatbot   |                         |
| `name`                  | *string*                | :heavy_minus_sign:      | The name of the chatbot | Chatbot -1              |
| `urls`                  | *string*[]              | :heavy_minus_sign:      | N/A                     |                         |