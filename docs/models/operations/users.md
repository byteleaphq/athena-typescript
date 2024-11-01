# Users

## Example Usage

```typescript
import { Users } from "@isosceles-ai/sdk/models/operations";

let value: Users = {
  credits: 943749,
  dailyCredits: 681820,
  email: "Humberto_Beier67@yahoo.com",
  planName: "<value>",
  userId: "<id>",
  firstName: "Braulio",
  lastName: "Hickle",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `credits`                           | *number*                            | :heavy_check_mark:                  | Remaining credits in the day        |
| `dailyCredits`                      | *number*                            | :heavy_check_mark:                  | Daily credits which the user gets   |
| `email`                             | *string*                            | :heavy_check_mark:                  | Email of the User                   |
| `planName`                          | *string*                            | :heavy_check_mark:                  | They subscription plan the user has |
| `userId`                            | *string*                            | :heavy_check_mark:                  | ID of the user                      |
| `firstName`                         | *string*                            | :heavy_check_mark:                  | First name of the User              |
| `lastName`                          | *string*                            | :heavy_check_mark:                  | Last name of the User               |