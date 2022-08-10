---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemStopUseOnEventSignal Class
description: Contents of the mojang-minecraft.ItemStopUseOnEventSignal class.
---
# ItemStopUseOnEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to an item stops used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemStopUseOnEvent) => void): (arg: ItemStopUseOnEvent) => void
`
Adds a callback that will be called when an item stops being used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemStopUseOnEvent*](ItemStopUseOnEvent.md)) => *void*

#### **Returns** (arg: [*ItemStopUseOnEvent*](ItemStopUseOnEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemStopUseOnEvent) => void): void
`
Removes a callback from being called when an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemStopUseOnEvent*](ItemStopUseOnEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
