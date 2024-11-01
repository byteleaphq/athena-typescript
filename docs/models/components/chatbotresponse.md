# ChatbotResponse

## Example Usage

```typescript
import { ChatbotResponse } from "@isosceles-ai/sdk/models/components";

let value: ChatbotResponse = {
  apiKey: "83816958-931c-42c0-9a21-c6f61c7cdcdb",
  brainId: "37d53982-bf08-4058-88d5-f91df0a7ab41",
  createdAt: "2024-02-18T19:00:11.989503+00:00",
  id: "7a2e792d-cf48-49d2-a36d-186be034a9dc",
  name: "Chatbot -1",
  urls: [
    "https://byteleap.co",
    "https://ayushgoyal.dev",
  ],
  userId: "a7a690e6-2a83-4ec5-8eb2-73b0c1d0aa9c",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `apiKey`                                            | *string*                                            | :heavy_minus_sign:                                  | The API key for the chatbot                         | 83816958-931c-42c0-9a21-c6f61c7cdcdb                |
| `brainId`                                           | *string*                                            | :heavy_minus_sign:                                  | The ID of the brain associated with the chatbot     | 37d53982-bf08-4058-88d5-f91df0a7ab41                |
| `createdAt`                                         | *string*                                            | :heavy_minus_sign:                                  | The creation timestamp of the chatbot               | 2024-02-18T19:00:11.989503+00:00                    |
| `id`                                                | *string*                                            | :heavy_minus_sign:                                  | The ID of the chatbot                               | 7a2e792d-cf48-49d2-a36d-186be034a9dc                |
| `name`                                              | *string*                                            | :heavy_minus_sign:                                  | The name of the chatbot                             | Chatbot -1                                          |
| `urls`                                              | *string*[]                                          | :heavy_minus_sign:                                  | An array of URLs associated with the chatbot        | [<br/>"https://byteleap.co",<br/>"https://ayushgoyal.dev"<br/>] |
| `userId`                                            | *string*                                            | :heavy_minus_sign:                                  | The ID of the user who owns the chatbot             | a7a690e6-2a83-4ec5-8eb2-73b0c1d0aa9c                |