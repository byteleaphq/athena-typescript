# PostIntegrationIntegrationNameAddRequestBody

## Example Usage

```typescript
import { PostIntegrationIntegrationNameAddRequestBody } from "@isosceles-ai/sdk/models/operations";

let value: PostIntegrationIntegrationNameAddRequestBody = {
  brainId: "1f1d7a6a-e45b-4974-a0ba-98935650cb9c",
  pageIds: [
    "65621",
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `brainId`                             | *string*                              | :heavy_minus_sign:                    | ID of the brain to add pages to       |
| `pageIds`                             | *string*[]                            | :heavy_minus_sign:                    | Array of page IDs to add to the brain |