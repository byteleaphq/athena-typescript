# UpdateChatThreadRequestBody

## Example Usage

```typescript
import { UpdateChatThreadRequestBody } from "@athena-ai/sdk/models/operations";

let value: UpdateChatThreadRequestBody = {
  temperature: null,
  name: "Test_chat2",
  systemMessage: "test system message",
  additionalProperties: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `temperature`                                                    | *number*                                                         | :heavy_minus_sign:                                               | between 0 and 1                                                  |                                                                  |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The updated name of the chat                                     | Test_chat2                                                       |
| `systemMessage`                                                  | *string*                                                         | :heavy_minus_sign:                                               | System message for the LLM                                       |                                                                  |
| `brainId`                                                        | *string*                                                         | :heavy_minus_sign:                                               | New brain ID to update                                           |                                                                  |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              | {<br/>"temperature": null,<br/>"system_message": "test system message"<br/>} |