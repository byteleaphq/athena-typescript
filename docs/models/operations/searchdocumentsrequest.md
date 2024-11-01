# SearchDocumentsRequest

## Example Usage

```typescript
import { SearchDocumentsRequest } from "@isosceles-ai/sdk/models/operations";

let value: SearchDocumentsRequest = {
  brainId: "",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `brainId`                                 | *string*                                  | :heavy_check_mark:                        | ID of the brain to search in              |                                           |
| `searchQuery`                             | *string*                                  | :heavy_minus_sign:                        | Optional search query to filter documents |                                           |