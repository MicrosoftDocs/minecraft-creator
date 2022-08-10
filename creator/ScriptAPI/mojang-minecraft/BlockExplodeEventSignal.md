---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockExplodeEventSignal Class
description: Contents of the mojang-minecraft.BlockExplodeEventSignal class.
---
# BlockExplodeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to when an explosion occurs, as it impacts individual blocks.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BlockExplodeEvent) => void): (arg: BlockExplodeEvent) => void
`
Adds a callback that will be called when an explosion occurs, as it impacts individual blocks.

#### **Parameters**
- **callback**: (arg: [*BlockExplodeEvent*](BlockExplodeEvent.md)) => *void*

#### **Returns** (arg: [*BlockExplodeEvent*](BlockExplodeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BlockExplodeEvent) => void): void
`
Removes a callback from being called when an explosion occurs, as it impacts individual blocks.

#### **Parameters**
- **callback**: (arg: [*BlockExplodeEvent*](BlockExplodeEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
