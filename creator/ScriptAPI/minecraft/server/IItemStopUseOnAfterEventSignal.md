---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IItemStopUseOnAfterEventSignal Class
description: Contents of the @minecraft/server.IItemStopUseOnAfterEventSignal class.
---
# IItemStopUseOnAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IItemStopUseOnAfterEventSignal
- [*ItemStopUseOnAfterEventSignal*](ItemStopUseOnAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires when an item has stopped being used on a block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ItemStopUseOnAfterEvent*](ItemStopUseOnAfterEvent.md)) => *void*

#### **Returns** (arg: [*ItemStopUseOnAfterEvent*](ItemStopUseOnAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ItemStopUseOnAfterEvent*](ItemStopUseOnAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
