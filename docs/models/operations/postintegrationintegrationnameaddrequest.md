# PostIntegrationIntegrationNameAddRequest

## Example Usage

```typescript
import { PostIntegrationIntegrationNameAddRequest } from "@isosceles-ai/sdk/models/operations";

let value: PostIntegrationIntegrationNameAddRequest = {
  integrationName: "notion",
  requestBody: {
    brainId: "1f1d7a6a-e45b-4974-a0ba-98935650cb9c",
    pageIds: [
      "65621",
    ],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `integrationName`                                                                                                                  | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Currently supported integrations are "notion" and "confluence". More integrations will be added in the future.                     | notion                                                                                                                             |
| `requestBody`                                                                                                                      | [operations.PostIntegrationIntegrationNameAddRequestBody](../../models/operations/postintegrationintegrationnameaddrequestbody.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | {<br/>"brain_id": "1f1d7a6a-e45b-4974-a0ba-98935650cb9c",<br/>"page_ids": [<br/>"65621"<br/>]<br/>}                                |