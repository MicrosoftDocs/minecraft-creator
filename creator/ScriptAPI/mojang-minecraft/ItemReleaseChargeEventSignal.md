---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemReleaseChargeEventSignal Class
description: Contents of the mojang-minecraft.ItemReleaseChargeEventSignal class.
---
# ItemReleaseChargeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to the releasing of charging for a chargeable item.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void
`
Adds a callback that will be called when a chargeable item is released from charging.

#### **Parameters**
- **callback**: (arg: [*ItemReleaseChargeEvent*](ItemReleaseChargeEvent.md)) => *void*

#### **Returns** (arg: [*ItemReleaseChargeEvent*](ItemReleaseChargeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void
`
Removes a callback from being called when a chargeable item is released from charging.

#### **Parameters**
- **callback**: (arg: [*ItemReleaseChargeEvent*](ItemReleaseChargeEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
