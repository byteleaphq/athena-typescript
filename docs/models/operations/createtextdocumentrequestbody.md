# CreateTextDocumentRequestBody

## Example Usage

```typescript
import { CreateTextDocumentRequestBody } from "@isosceles-ai/sdk/models/operations";

let value: CreateTextDocumentRequestBody = {
  content: "<value>",
  title: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `content`                                                  | *string*                                                   | :heavy_check_mark:                                         | Text that is to be added to the brain                      |
| `title`                                                    | *string*                                                   | :heavy_check_mark:                                         | Title of the text document. This will also be the filename |