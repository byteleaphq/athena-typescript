# PostIntegrationIntegrationNameDisconnectRequest

## Example Usage

```typescript
import { PostIntegrationIntegrationNameDisconnectRequest } from "@athena-ai/sdk/models/operations";

let value: PostIntegrationIntegrationNameDisconnectRequest = {
  integrationName: "notion",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `integrationName`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Currently supported integrations are "notion" and "confluence". More integrations will be added in the future. | notion                                                                                                         |