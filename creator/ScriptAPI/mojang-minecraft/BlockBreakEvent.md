---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockBreakEvent Class
description: Contents of the mojang-minecraft.BlockBreakEvent class.
---
# BlockBreakEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an event where a player breaks a block.

## Properties

### **block**
`read-only block: Block;`

Block broken in this event. Note that because this event fires right after a block is broken, the block you will receive will likely be of type 'minecraft:air'. See the .brokenBlockPermutation property for information on this block before it was broken.

Type: [*Block*](Block.md)

### **brokenBlockPermutation**
`read-only brokenBlockPermutation: BlockPermutation;`

Returns permutation information about this block before it was broken.

Type: [*BlockPermutation*](BlockPermutation.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that has been broken in this event.

Type: [*Dimension*](Dimension.md)

### **player**
`read-only player: Player;`

Player that broke the block for this event.

Type: [*Player*](Player.md)
