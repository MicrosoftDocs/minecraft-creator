---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ChatSendBeforeEventSignal Class
description: Contents of the @minecraft/server.ChatSendBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ChatSendBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to an event that fires before chat messages are sent.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void
`

Adds a callback that will be called before new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*ChatSendBeforeEvent*](ChatSendBeforeEvent.md)) => *void*

**Returns** (arg: [*ChatSendBeforeEvent*](ChatSendBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void
`

Removes a callback from being called before new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*ChatSendBeforeEvent*](ChatSendBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
