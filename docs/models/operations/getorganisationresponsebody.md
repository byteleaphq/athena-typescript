# GetOrganisationResponseBody

## Example Usage

```typescript
import { GetOrganisationResponseBody } from "@athena-ai/sdk/models/operations";

let value: GetOrganisationResponseBody = {
  createdAt: "Thu, 16 May 2024 18:57:16 GMT",
  id: 62,
  name: "Organization for ___",
  orgUuid: "989ad142-ab62-4e6b-92b6-83a25dec3151",
  role: "admin",
  userUuid: "6cc35c0a-5095-4677-ac22-843a68138f53",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `createdAt`                               | *string*                                  | :heavy_minus_sign:                        | Creation timestamp of the organization    | Thu, 16 May 2024 18:57:16 GMT             |
| `email`                                   | *string*                                  | :heavy_minus_sign:                        | Email associated with the organization    |                                           |
| `id`                                      | *number*                                  | :heavy_minus_sign:                        | ID of the organization                    | 62                                        |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | Name of the organization                  | Organization for ___                      |
| `orgName`                                 | *string*                                  | :heavy_minus_sign:                        | Name of the organization (same as 'name') |                                           |
| `orgUuid`                                 | *string*                                  | :heavy_minus_sign:                        | UUID of the organization                  | 989ad142-ab62-4e6b-92b6-83a25dec3151      |
| `role`                                    | *string*                                  | :heavy_minus_sign:                        | Role of the user in the organization      | admin                                     |
| `token`                                   | *string*                                  | :heavy_minus_sign:                        | Invite token for the organization         |                                           |
| `userUuid`                                | *string*                                  | :heavy_minus_sign:                        | UUID of the user                          | 6cc35c0a-5095-4677-ac22-843a68138f53      |