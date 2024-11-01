# GetIntegrationIntegrationNameListRequest

## Example Usage

```typescript
import { GetIntegrationIntegrationNameListRequest } from "@isosceles-ai/sdk/models/operations";

let value: GetIntegrationIntegrationNameListRequest = {
  integrationName: "confluence",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `integrationName`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Currently supported integrations are "notion" and "confluence". More integrations will be added in the future. | confluence                                                                                                     |