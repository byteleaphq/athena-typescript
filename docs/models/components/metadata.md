# Metadata

Identifier for metadata object 

## Example Usage

```typescript
import { Metadata } from "@isosceles-ai/sdk/models/components";

let value: Metadata = {
  languageCode: "<value>",
  originalUrl: "https://plump-casket.org/",
  originalObject: "<value>",
  processed: false,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `languageCode`                                 | *string*                                       | :heavy_check_mark:                             | Identifier for ISO language code               |
| `originalUrl`                                  | *string*                                       | :heavy_check_mark:                             | Identifier of the url for the original file    |
| `originalObject`                               | *string*                                       | :heavy_check_mark:                             | URL link to access original object             |
| `processed`                                    | *boolean*                                      | :heavy_check_mark:                             | Boolean to check whether the file is processed |