# CreateDocumentWithUrlRequest

## Example Usage

```typescript
import { CreateDocumentWithUrlRequest } from "@athena-ai/sdk/models/operations";

let value: CreateDocumentWithUrlRequest = {
  brainId: "{{brain_id}}",
  requestBody: {
    url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `brainId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | {{brain_id}}                                                                                               |
| `requestBody`                                                                                              | [operations.CreateDocumentWithUrlRequestBody](../../models/operations/createdocumentwithurlrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | {<br/>"url": "https://en.wikipedia.org/wiki/Artificial_intelligence"<br/>}                                 |