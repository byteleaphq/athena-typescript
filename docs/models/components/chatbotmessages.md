# ChatbotMessages

## Example Usage

```typescript
import { ChatbotMessages } from "@isosceles-ai/sdk/models/components";

let value: ChatbotMessages = {
  chatMessages: [
    {
      actor: "USER",
      createdAt: "2024-05-20T06:46:09.010233+00:00",
      id: 461,
      message: "hi",
      threadId: "7c621be0-96d8-4ecc-9149-74d0ff94f106",
      timestamp: null,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `chatMessages`                                                       | [components.ChatMessages](../../models/components/chatmessages.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |