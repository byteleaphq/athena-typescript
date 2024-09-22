# CreateChatThreadRequestBody

## Example Usage

```typescript
import { CreateChatThreadRequestBody } from "@athena-ai/sdk/models/operations";

let value: CreateChatThreadRequestBody = {
  brainId: "<value>",
  name: "<value>",
  integration: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `brainId`                                      | *string*                                       | :heavy_check_mark:                             | The ID of the brain to associate with the chat |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the chat                           |
| `integration`                                  | *string*                                       | :heavy_check_mark:                             | The integration to use for the chat            |