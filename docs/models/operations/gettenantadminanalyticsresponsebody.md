# GetTenantAdminAnalyticsResponseBody

## Example Usage

```typescript
import { GetTenantAdminAnalyticsResponseBody } from "@isosceles-ai/sdk/models/operations";

let value: GetTenantAdminAnalyticsResponseBody = {
  brainsCount: 414662,
  brainsPerOrganisation: [
    {
      name: "<value>",
      total: 264555,
    },
  ],
  chatMessageCount: [
    {
      name: "<value>",
      total: 774234,
    },
  ],
  documentCount: 456150,
  documentPerBrain: [
    {
      name: "<value>",
      total: 568434,
    },
  ],
  organisationCount: 18789,
  queriesPerBrain: [
    {
      name: "<value>",
      total: 617636,
    },
  ],
  queriesPerOrganisation: [
    {
      name: "<value>",
      total: 612096,
    },
  ],
  userCount: 616934,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `brainsCount`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `brainsPerOrganisation`                                                                  | [operations.BrainsPerOrganisation](../../models/operations/brainsperorganisation.md)[]   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `chatMessageCount`                                                                       | [operations.ChatMessageCount](../../models/operations/chatmessagecount.md)[]             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentCount`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentPerBrain`                                                                       | [operations.DocumentPerBrain](../../models/operations/documentperbrain.md)[]             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `organisationCount`                                                                      | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `queriesPerBrain`                                                                        | [operations.QueriesPerBrain](../../models/operations/queriesperbrain.md)[]               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `queriesPerOrganisation`                                                                 | [operations.QueriesPerOrganisation](../../models/operations/queriesperorganisation.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `userCount`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |