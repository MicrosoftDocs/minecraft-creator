---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemStartUseOnEventSignal Class
description: Contents of the mojang-minecraft.ItemStartUseOnEventSignal class.
---
# ItemStartUseOnEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to an item starting being used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemStartUseOnEvent) => void): (arg: ItemStartUseOnEvent) => void
`
Adds a callback that will be called when an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemStartUseOnEvent*](ItemStartUseOnEvent.md)) => *void*

#### **Returns** (arg: [*ItemStartUseOnEvent*](ItemStartUseOnEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemStartUseOnEvent) => void): void
`
Removes a callback from being called when an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemStartUseOnEvent*](ItemStartUseOnEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
