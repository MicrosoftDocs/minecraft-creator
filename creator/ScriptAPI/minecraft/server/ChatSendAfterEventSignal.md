---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ChatSendAfterEventSignal Class
description: Contents of the @minecraft/server.ChatSendAfterEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ChatSendAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to chat messages being sent.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void
`

Adds a callback that will be called when new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*ChatSendAfterEvent*](ChatSendAfterEvent.md)) => *void*

**Returns** (arg: [*ChatSendAfterEvent*](ChatSendAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void
`

Removes a callback from being called when new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*ChatSendAfterEvent*](ChatSendAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
