---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BeforeItemUseOnEventSignal Class
description: Contents of the @minecraft/server.BeforeItemUseOnEventSignal class.
---
# BeforeItemUseOnEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that fire before an item being used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void
`

Adds a callback that will be called before an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*BeforeItemUseOnEvent*](BeforeItemUseOnEvent.md)) => *void*

#### **Returns** (arg: [*BeforeItemUseOnEvent*](BeforeItemUseOnEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void
`

Removes a callback from being called before an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*BeforeItemUseOnEvent*](BeforeItemUseOnEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
