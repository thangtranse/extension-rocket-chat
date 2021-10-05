# extension-rocket-chat

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install ExtensionRocketChatComponent using `npm`;

```sh
$ [npm install | yarn add] extension-rocket-chat
```

## Basic Use

Configure and load ExtensionRocketChatComponent in the application constructor
as shown below.

```ts
import {ExtensionRocketChatComponent, ExtensionRocketChatComponentOptions, DEFAULT_EXTENSION_ROCKET_CHAT_OPTIONS} from 'extension-rocket-chat';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: ExtensionRocketChatComponentOptions = DEFAULT_EXTENSION_ROCKET_CHAT_OPTIONS;
    this.configure(ExtensionRocketChatComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(ExtensionRocketChatComponent);
    // ...
  }
  // ...
}
```
