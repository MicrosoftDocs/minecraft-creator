---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemStopChargeEventSignal Class
description: Contents of the mojang-minecraft.ItemStopChargeEventSignal class.
---
# ItemStopChargeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to the stopping of charging for an item that has a registered minecraft:chargeable component.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void
`
Adds a callback that will be called when a chargeable item stops charging.

#### **Parameters**
- **callback**: (arg: [*ItemStopChargeEvent*](ItemStopChargeEvent.md)) => *void*

#### **Returns** (arg: [*ItemStopChargeEvent*](ItemStopChargeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void
`
Removes a callback from being called when a chargeable item stops charging.

#### **Parameters**
- **callback**: (arg: [*ItemStopChargeEvent*](ItemStopChargeEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
