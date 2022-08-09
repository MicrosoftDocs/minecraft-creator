---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemStartChargeEventSignal Class
description: Contents of the mojang-minecraft.ItemStartChargeEventSignal class.
---
# ItemStartChargeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to the start of charging for a chargeable item.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void
`
Adds a callback that will be called when a chargeable item starts charging.

#### **Parameters**
- **callback**: (arg: [*ItemStartChargeEvent*](ItemStartChargeEvent.md)) => *void*

#### **Returns** (arg: [*ItemStartChargeEvent*](ItemStartChargeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void
`
Removes a callback from being called when a chargeable item starts charging.

#### **Parameters**
- **callback**: (arg: [*ItemStartChargeEvent*](ItemStartChargeEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
