export * from "./component";
export * from "./keys";
export * from "./types";

import { ExtensionRocketchatApplication } from "./application";

if (require.main === module) {
  const app = new ExtensionRocketchatApplication();
  app.main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
