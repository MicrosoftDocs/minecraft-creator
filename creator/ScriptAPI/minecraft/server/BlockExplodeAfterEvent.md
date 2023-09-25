---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.BlockExplodeAfterEvent Class
description: Contents of the @minecraft/server.BlockExplodeAfterEvent class.
ms.service: minecraft-bedrock-edition
---
# BlockExplodeAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an explosion that has occurred for a specific block.

## Properties

### **explodedBlockPermutation**
`read-only explodedBlockPermutation: BlockPermutation;`

Description of the block that has exploded.

Type: [*BlockPermutation*](BlockPermutation.md)

### **source**
`read-only source?: Entity;`

Optional source of the explosion.

Type: [*Entity*](Entity.md)
