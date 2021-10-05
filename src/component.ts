import { Binding, Component, createBindingFromClass } from "@loopback/core";
import { ExtensionRocketchatService } from "./extension-rocket-chat.service";
import { EXTENSION_ROCKET_CHAT_SERVICE } from "./keys";

export class ExtensionRocketChatComponent implements Component {
  bindings: Binding[] = [
    createBindingFromClass(ExtensionRocketchatService, {
      key: EXTENSION_ROCKET_CHAT_SERVICE,
    }),
  ];
}
