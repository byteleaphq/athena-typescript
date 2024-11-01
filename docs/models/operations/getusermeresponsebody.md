# GetUserMeResponseBody

## Example Usage

```typescript
import { GetUserMeResponseBody } from "@isosceles-ai/sdk/models/operations";

let value: GetUserMeResponseBody = {
  email: "Freida9@gmail.com",
  externalUserId: "<id>",
  firstName: "Jane",
  id: "<id>",
  lastName: "Moen-Ritchie",
  phoneNumber: "412-234-0652",
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