---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemUseEventSignal Class
description: Contents of the mojang-minecraft.ItemUseEventSignal class.
---
# ItemUseEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to an item use event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void
`
Adds a callback that will be called when an item is used.

#### **Parameters**
- **callback**: (arg: [*ItemUseEvent*](ItemUseEvent.md)) => *void*

#### **Returns** (arg: [*ItemUseEvent*](ItemUseEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemUseEvent) => void): void
`
Removes a callback from being called when an item is used.

#### **Parameters**
- **callback**: (arg: [*ItemUseEvent*](ItemUseEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
