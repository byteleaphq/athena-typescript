# UpdateBrainRequest

## Example Usage

```typescript
import { UpdateBrainRequest } from "@isosceles-ai/sdk/models/operations";

let value: UpdateBrainRequest = {
  brainId: "",
  requestBody: {
    name: "Test Updated Brain",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `brainId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `requestBody`                                                                          | [operations.UpdateBrainRequestBody](../../models/operations/updatebrainrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    | {<br/>"name": "Test Updated Brain"<br/>}                                               |