# Brain

## Example Usage

```typescript
import { Brain } from "@athena-ai/sdk/models/components";

let value: Brain = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `activeFeatures`                                                       | [components.ActiveFeatures](../../models/components/activefeatures.md) | :heavy_minus_sign:                                                     | Active features of the brain. Currently used internally                |
| `brainId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for the brain                                        |
| `createdOn`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | Timestamp when the brain was created                                   |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Description of the brain                                               |
| `documentCount`                                                        | *number*                                                               | :heavy_minus_sign:                                                     | Number of documents in the brain                                       |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for the brain (same as brain_id)                     |
| `languageCode`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | Language code of the brain                                             |
| `metadataSchema`                                                       | [components.MetadataSchema](../../models/components/metadataschema.md) | :heavy_minus_sign:                                                     | Metadata schema for the brain                                          |
| `orgUuid`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for the organization                                 |
| `storageBytes`                                                         | *number*                                                               | :heavy_minus_sign:                                                     | Total storage size of the brain in bytes                               |
| `suppId`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Supplementary identifier for the brain                                 |
| `title`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Title or name of the brain                                             |
| `type`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Type of the brain (e.g., unstructured, structured)                     |
| `updatedOn`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | Timestamp when the brain was last updated                              |