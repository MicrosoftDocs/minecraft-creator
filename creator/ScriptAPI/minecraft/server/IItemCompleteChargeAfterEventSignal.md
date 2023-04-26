---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IItemCompleteChargeAfterEventSignal Class
description: Contents of the @minecraft/server.IItemCompleteChargeAfterEventSignal class.
---
# IItemCompleteChargeAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IItemCompleteChargeAfterEventSignal
- [*ItemCompleteChargeAfterEventSignal*](ItemCompleteChargeAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after an item has completed charging.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemCompleteChargeAfterEvent) => void): (arg: ItemCompleteChargeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ItemCompleteChargeAfterEvent*](ItemCompleteChargeAfterEvent.md)) => *void*

#### **Returns** (arg: [*ItemCompleteChargeAfterEvent*](ItemCompleteChargeAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemCompleteChargeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ItemCompleteChargeAfterEvent*](ItemCompleteChargeAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
