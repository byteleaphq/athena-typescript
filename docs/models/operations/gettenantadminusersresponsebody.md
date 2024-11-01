# GetTenantAdminUsersResponseBody

## Example Usage

```typescript
import { GetTenantAdminUsersResponseBody } from "@isosceles-ai/sdk/models/operations";

let value: GetTenantAdminUsersResponseBody = {
  users: [
    {
      credits: 570197,
      dailyCredits: 438601,
      email: "Bart_Crooks@hotmail.com",
      planName: "<value>",
      userId: "<id>",
      firstName: "Deion",
      lastName: "Brown",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `users`                                                | [operations.Users](../../models/operations/users.md)[] | :heavy_check_mark:                                     | N/A                                                    |