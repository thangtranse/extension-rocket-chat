import { BindingKey } from "@loopback/core";
import { ExtensionRocketchatService } from "./extension-rocket-chat.service";
/**
 * Strongly-typed binding key for GreetingService
 */
export const EXTENSION_ROCKET_CHAT_SERVICE = BindingKey.create<
  ExtensionRocketchatService
>("services.ExtensionRocketchatService");
