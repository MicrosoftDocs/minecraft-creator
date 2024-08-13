---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockComponentPlayerDestroyEvent Class
description: Contents of the @minecraft/server.BlockComponentPlayerDestroyEvent class.
---
# BlockComponentPlayerDestroyEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding a specific block being destroyed.

## Properties

### **destroyedBlockPermutation**
`read-only destroyedBlockPermutation: BlockPermutation;`

Returns permutation information about this block before it was destroyed.

Type: [*BlockPermutation*](BlockPermutation.md)

### **player**
`read-only player?: Player;`

The player that destroyed this block.

Type: [*Player*](Player.md)
