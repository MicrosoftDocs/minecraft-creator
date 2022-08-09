---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeItemUseEventSignal Class
description: Contents of the mojang-minecraft.BeforeItemUseEventSignal class.
---
# BeforeItemUseEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that fire before an item is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void
`
Adds a callback that will be called before an item is used.

#### **Parameters**
- **callback**: (arg: [*BeforeItemUseEvent*](BeforeItemUseEvent.md)) => *void*

#### **Returns** (arg: [*BeforeItemUseEvent*](BeforeItemUseEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void
`
Removes a callback from being called before an item is used.

#### **Parameters**
- **callback**: (arg: [*BeforeItemUseEvent*](BeforeItemUseEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
