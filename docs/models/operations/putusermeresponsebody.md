# PutUserMeResponseBody

## Example Usage

```typescript
import { PutUserMeResponseBody } from "@isosceles-ai/sdk/models/operations";

let value: PutUserMeResponseBody = {
  email: "Laron44@yahoo.com",
  externalUserId: "<id>",
  firstName: "Maximo",
  id: "<id>",
  lastName: "Schulist",
  phoneNumber: "1-958-775-9646 x036",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `email`                  | *string*                 | :heavy_check_mark:       | Email ID of the user     |
| `externalUserId`         | *string*                 | :heavy_check_mark:       | Clerk ID of the user     |
| `firstName`              | *string*                 | :heavy_check_mark:       | First name of the user   |
| `id`                     | *string*                 | :heavy_check_mark:       | User ID                  |
| `lastName`               | *string*                 | :heavy_check_mark:       | Last name of the user    |
| `phoneNumber`            | *string*                 | :heavy_check_mark:       | Phone number of the user |