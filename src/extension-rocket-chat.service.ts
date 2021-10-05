import { extensionPoint } from "@loopback/core";
import { EXTENSION_POINT_NAME } from "./types";

@extensionPoint(EXTENSION_POINT_NAME)
export class ExtensionRocketchatService {
  constructor() {}
}
