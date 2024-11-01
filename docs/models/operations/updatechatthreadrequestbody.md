# UpdateChatThreadRequestBody

## Example Usage

```typescript
import { UpdateChatThreadRequestBody } from "@isosceles-ai/sdk/models/operations";

let value: UpdateChatThreadRequestBody = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `responseLength`                                                                                       | [operations.UpdateChatThreadResponseLength](../../models/operations/updatechatthreadresponselength.md) | :heavy_minus_sign:                                                                                     | Configure response length                                                                              |
| `temperature`                                                                                          | *number*                                                                                               | :heavy_minus_sign:                                                                                     | between 0 and 1                                                                                        |
| `systemMessage`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | System message for the LLM                                                                             |
| `model`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | LLM Model to choose from                                                                               |