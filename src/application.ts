// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-greeter-extension
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { Application } from "@loopback/core";

export class ExtensionRocketchatApplication extends Application {
  constructor() {
    super();
  }

  async main() {
    console.log("English haha:");
  }

  async getGreetingService() {
    return "haha";
  }
}
