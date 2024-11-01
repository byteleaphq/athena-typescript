# PostIntegrationIntegrationNameConnectRequest

## Example Usage

```typescript
import { PostIntegrationIntegrationNameConnectRequest } from "@isosceles-ai/sdk/models/operations";

let value: PostIntegrationIntegrationNameConnectRequest = {
  integrationName: "notion",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `integrationName`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Currently supported integrations are "notion" and "confluence". More integrations will be added in the future. | notion                                                                                                         |