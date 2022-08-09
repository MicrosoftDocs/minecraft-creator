---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockPlaceEvent Class
description: Contents of the mojang-minecraft.BlockPlaceEvent class.
---
# BlockPlaceEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an event where a player places a block.

## Properties

### **block**
`read-only block: Block;`

Block placed in this event.

Type: [*Block*](Block.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that has been placed in this event.

Type: [*Dimension*](Dimension.md)

### **player**
`read-only player: Player;`

Player that placed the block for this event.

Type: [*Player*](Player.md)
