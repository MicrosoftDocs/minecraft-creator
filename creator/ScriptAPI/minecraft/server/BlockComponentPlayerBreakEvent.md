---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockComponentPlayerBreakEvent Class
description: Contents of the @minecraft/server.BlockComponentPlayerBreakEvent class.
---
# BlockComponentPlayerBreakEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding a specific block being broken by a player.

## Properties

### **brokenBlockPermutation**
`read-only brokenBlockPermutation: BlockPermutation;`

Returns permutation information about this block before it was broken.

Type: [*BlockPermutation*](BlockPermutation.md)

### **player**
`read-only player?: Player;`

The player that broke this block.

Type: [*Player*](Player.md)
