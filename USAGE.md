<!-- Start SDK Example Usage [usage] -->
```typescript
import { Acp } from "@athena-ai/sdk";

const acp = new Acp({
  security: {
    username: process.env["ACP_USERNAME"] ?? "",
    password: process.env["ACP_PASSWORD"] ?? "",
  },
});

async function run() {
  const result = await acp.brain.createBrain({
    name: "Test - brain",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->