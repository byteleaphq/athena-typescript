# AddApiKeyResponseBody

## Example Usage

```typescript
import { AddApiKeyResponseBody } from "@isosceles-ai/sdk/models/operations";

let value: AddApiKeyResponseBody = {
  apiKeys: [
    {
      apiKey: "<value>",
      name: "<value>",
    },
  ],
  createdAt: "<value>",
  email: "Rita_Strosin@gmail.com",
  id: 780529,
  name: "<value>",
  orgUuid: "<id>",
  token: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `apiKeys`                                                                    | [operations.AddApiKeyApiKeys](../../models/operations/addapikeyapikeys.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `createdAt`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `email`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `orgUuid`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `token`                                                                      | *any*                                                                        | :heavy_check_mark:                                                           | N/A                                                                          |