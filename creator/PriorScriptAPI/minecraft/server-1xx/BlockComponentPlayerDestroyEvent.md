---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockComponentPlayerDestroyEvent Class
description: Contents of the @minecraft/server.BlockComponentPlayerDestroyEvent class (Version 1.x.x).
---
# BlockComponentPlayerDestroyEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module.

> [!CAUTION]
> This class is deprecated and will be removed in 2.0.0.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding a specific block being destroyed.

## Properties

### **destroyedBlockPermutation**
`read-only destroyedBlockPermutation: BlockPermutation;`

Returns permutation information about this block before it was destroyed.

Type: [*BlockPermutation*](BlockPermutation.md)

> [!CAUTION]
> This property is deprecated and will be removed in 2.0.0.

### **player**
`read-only player?: Player;`

The player that destroyed this block.

Type: [*Player*](Player.md)

> [!CAUTION]
> This property is deprecated and will be removed in 2.0.0.
