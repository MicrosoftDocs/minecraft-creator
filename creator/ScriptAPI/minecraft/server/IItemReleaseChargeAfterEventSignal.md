---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IItemReleaseChargeAfterEventSignal Class
description: Contents of the @minecraft/server.IItemReleaseChargeAfterEventSignal class.
---
# IItemReleaseChargeAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IItemReleaseChargeAfterEventSignal
- [*ItemReleaseChargeAfterEventSignal*](ItemReleaseChargeAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires after a charged item is released.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemReleaseChargeAfterEvent) => void): (arg: ItemReleaseChargeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ItemReleaseChargeAfterEvent*](ItemReleaseChargeAfterEvent.md)) => *void*

#### **Returns** (arg: [*ItemReleaseChargeAfterEvent*](ItemReleaseChargeAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemReleaseChargeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ItemReleaseChargeAfterEvent*](ItemReleaseChargeAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
