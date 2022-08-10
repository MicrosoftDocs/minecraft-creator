---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockPlaceEventSignal Class
description: Contents of the mojang-minecraft.BlockPlaceEventSignal class.
---
# BlockPlaceEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to when a block is placed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void
`
Adds a callback that will be called when a block is placed by a player.

#### **Parameters**
- **callback**: (arg: [*BlockPlaceEvent*](BlockPlaceEvent.md)) => *void*

#### **Returns** (arg: [*BlockPlaceEvent*](BlockPlaceEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BlockPlaceEvent) => void): void
`
Removes a callback from being called when an block is placed.

#### **Parameters**
- **callback**: (arg: [*BlockPlaceEvent*](BlockPlaceEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
