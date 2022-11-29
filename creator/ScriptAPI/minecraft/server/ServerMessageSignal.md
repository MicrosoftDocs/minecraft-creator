---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ServerMessageSignal Class
description: Contents of the @minecraft/server.ServerMessageSignal class.
---
# ServerMessageSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are message passing to a server. This event is not currently fully implemented, and should not be used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: MessageReceiveEvent) => void): (arg: MessageReceiveEvent) => void
`

Adds a callback that will be called when an internal message is passed.

#### **Parameters**
- **callback**: (arg: [*MessageReceiveEvent*](MessageReceiveEvent.md)) => *void*

#### **Returns** (arg: [*MessageReceiveEvent*](MessageReceiveEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: MessageReceiveEvent) => void): void
`

Removes a callback from being called when an internal message is passed.

#### **Parameters**
- **callback**: (arg: [*MessageReceiveEvent*](MessageReceiveEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
