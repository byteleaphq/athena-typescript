# UpdateChatThreadRequest

## Example Usage

```typescript
import { UpdateChatThreadRequest } from "@athena-ai/sdk/models/operations";

let value: UpdateChatThreadRequest = {
  chatId: "{{chat_id}}",
  requestBody: {
    temperature: null,
    name: "Test_chat2",
    systemMessage: "test system message",
    additionalProperties: {

    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `chatId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | {{chat_id}}                                                                                      |
| `requestBody`                                                                                    | [operations.UpdateChatThreadRequestBody](../../models/operations/updatechatthreadrequestbody.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              | {<br/>"temperature": null,<br/>"system_message": "test system message"<br/>}                     |