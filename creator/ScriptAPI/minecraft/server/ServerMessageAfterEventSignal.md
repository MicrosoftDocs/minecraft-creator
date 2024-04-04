---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ServerMessageAfterEventSignal Class
description: Contents of the @minecraft/server.ServerMessageAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ServerMessageAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are message passing to a server. This event is not currently fully implemented, and should not be used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void
`

Adds a callback that will be called when an internal message is passed.

#### **Parameters**
- **callback**: (arg: [*MessageReceiveAfterEvent*](MessageReceiveAfterEvent.md)) => *void*

**Returns** (arg: [*MessageReceiveAfterEvent*](MessageReceiveAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void
`

Removes a callback from being called when an internal message is passed.

#### **Parameters**
- **callback**: (arg: [*MessageReceiveAfterEvent*](MessageReceiveAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
