# CreateChatThreadRequestBody

## Example Usage

```typescript
import { CreateChatThreadRequestBody } from "@isosceles-ai/sdk/models/operations";

let value: CreateChatThreadRequestBody = {
  brainId: "<id>",
  name: "<value>",
  chatMessageType: "TEXT",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `brainId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The ID of the brain to associate with the chat                           |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name of the chat                                                     |
| `chatMessageType`                                                        | [operations.ChatMessageType](../../models/operations/chatmessagetype.md) | :heavy_check_mark:                                                       | The type fo response interface                                           |
| `responseLength`                                                         | [operations.ResponseLength](../../models/operations/responselength.md)   | :heavy_minus_sign:                                                       | Configure response length                                                |
| `temperature`                                                            | *number*                                                                 | :heavy_minus_sign:                                                       | between 0 and 1                                                          |
| `systemMessage`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | System message for the LLM                                               |
| `model`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | LLM Model to choose from                                                 |