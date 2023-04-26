---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IChatSendAfterEventSignal Class
description: Contents of the @minecraft/server.IChatSendAfterEventSignal class.
---
# IChatSendAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IChatSendAfterEventSignal
- [*ChatSendAfterEventSignal*](ChatSendAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires when a chat message is sent.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ChatSendAfterEvent*](ChatSendAfterEvent.md)) => *void*

#### **Returns** (arg: [*ChatSendAfterEvent*](ChatSendAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ChatSendAfterEvent*](ChatSendAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
