---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BeforeChatEventSignal Class
description: Contents of the @minecraft/server.BeforeChatEventSignal class.
---
# BeforeChatEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to an event that fires before chat messages are sent.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void
`

Adds a callback that will be called before new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*BeforeChatEvent*](BeforeChatEvent.md)) => *void*

#### **Returns** (arg: [*BeforeChatEvent*](BeforeChatEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeChatEvent) => void): void
`

Removes a callback from being called before new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*BeforeChatEvent*](BeforeChatEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
