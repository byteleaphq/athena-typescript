# CreateChatThreadWithMsgRequestBody

## Example Usage

```typescript
import { CreateChatThreadWithMsgRequestBody } from "@athena-ai/sdk/models/operations";

let value: CreateChatThreadWithMsgRequestBody = {
  brainId: "<value>",
  name: "Slack Chat - 2024-06-26T12:34:56.789Z",
  message: "Hello, how can I assist you today?",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `brainId`                                      | *string*                                       | :heavy_check_mark:                             | The ID of the brain to associate with the chat |                                                |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the chat                           | Slack Chat - 2024-06-26T12:34:56.789Z          |
| `message`                                      | *string*                                       | :heavy_check_mark:                             | The initial message to start the chat          |                                                |